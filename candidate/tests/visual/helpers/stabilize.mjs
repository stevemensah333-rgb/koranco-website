import { expect } from "@playwright/test"
import path from "node:path"
import { fileURLToPath } from "node:url"

const FONT_TIMEOUT_MS = 15_000
const MEDIA_TIMEOUT_MS = 8_000
const helperDirectory = path.dirname(fileURLToPath(import.meta.url))
const repositoryRoot = path.resolve(helperDirectory, "../../../..")

const visualNormalizationCss = `
  #__framer-badge-container,
  [data-framer-badge],
  .framer-badge,
  [data-framer-name="Light"],
  a[aria-label*="Framer" i][href*="framer.com"] {
    display: none !important;
  }

  video {
    visibility: hidden !important;
  }

  /* Framer's headless compositor intermittently omits this transformed layer.
     Its geometry and text are asserted separately; stable pixel captures hide
     it on both targets rather than recording a random paint result. */
  [data-framer-name="Button & Description"],
  [data-testid="hero-description"] {
    visibility: hidden !important;
  }
`

export async function openSettledHome(page) {
  await routeApprovedAssets(page)
  await page.goto("/", { waitUntil: "domcontentloaded" })

  const heroHeading = page.getByRole("heading", {
    level: 1,
    name: /Innovative Technology for Agricultural Growth/i,
  })

  await expect(heroHeading).toBeVisible()
  await page.addStyleTag({ content: visualNormalizationCss })
  await waitForFonts(page)
  await waitForVisibleImages(page)

  // The longest audited hero entrance lasts one second. Waiting beyond it keeps
  // the initial-viewport assertion focused on the settled design.
  await page.waitForTimeout(1_250)
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.waitForTimeout(100)

  return { heroHeading }
}

async function routeApprovedAssets(page) {
  const approvedAssets = [
    {
      filename: "w8BxcgOTdrnm1oAx9APIWHAr7Y.png",
      localPath: path.join(
        repositoryRoot,
        "assets/images/w8BxcgOTdrnm1oAx9APIWHAr7Y.png",
      ),
      contentType: "image/avif",
    },
    {
      filename: "wuQr8zED6pERTtGdsItynbUjr0.jpg",
      localPath: path.join(
        repositoryRoot,
        "assets/images/wuQr8zED6pERTtGdsItynbUjr0.jpg",
      ),
      contentType: "image/avif",
    },
    {
      filename: "FcybOZJ2ipUdK2dQmwN3gFVAvuk.woff2",
      localPath: path.join(
        repositoryRoot,
        "assets/fonts/FcybOZJ2ipUdK2dQmwN3gFVAvuk.woff2",
      ),
      contentType: "font/woff2",
    },
    {
      filename: "Np45wly46PBKqCGM0tXpdJqVAo.mp4",
      localPath: path.join(
        repositoryRoot,
        "assets/misc/Np45wly46PBKqCGM0tXpdJqVAo.mp4",
      ),
      contentType: "video/mp4",
    },
  ]

  for (const asset of approvedAssets) {
    await page.route(`**/*${asset.filename}*`, (route) =>
      route.fulfill({
        path: asset.localPath,
        contentType: asset.contentType,
      }),
    )
  }

}

async function waitForFonts(page) {
  await page.evaluate(async (timeoutMs) => {
    if (!document.fonts) return

    let timeoutId
    const timeout = new Promise((_, reject) => {
      timeoutId = window.setTimeout(
        () => reject(new Error("Timed out waiting for document fonts")),
        timeoutMs,
      )
    })

    try {
      await Promise.race([
        document.fonts.load('1000 62px "BDO Grotesk Variable"'),
        timeout,
      ])
    } finally {
      window.clearTimeout(timeoutId)
    }
  }, FONT_TIMEOUT_MS)
}

async function waitForVisibleImages(page) {
  await page.evaluate(async (timeoutMs) => {
    const isVisibleInViewport = (image) => {
      const style = getComputedStyle(image)
      const rect = image.getBoundingClientRect()

      return (
        style.display !== "none" &&
        style.visibility !== "hidden" &&
        rect.width > 0 &&
        rect.height > 0 &&
        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.top < innerHeight &&
        rect.left < innerWidth
      )
    }

    const images = [...document.images].filter(isVisibleInViewport)

    await Promise.all(
      images.map(async (image) => {
        if (!image.complete) {
          await new Promise((resolve, reject) => {
            let timeoutId
            const cleanUp = () => {
              image.removeEventListener("load", onLoad)
              image.removeEventListener("error", onError)
              window.clearTimeout(timeoutId)
            }
            const onLoad = () => {
              cleanUp()
              resolve()
            }
            const onError = () => {
              cleanUp()
              reject(new Error(`Visible image failed to load: ${image.currentSrc}`))
            }

            image.addEventListener("load", onLoad, { once: true })
            image.addEventListener("error", onError, { once: true })
            timeoutId = window.setTimeout(() => {
              cleanUp()
              reject(
                new Error(`Timed out waiting for visible image: ${image.currentSrc}`),
              )
            }, timeoutMs)
          })
        }

        if (!image.naturalWidth) {
          throw new Error(`Visible image has no decoded content: ${image.currentSrc}`)
        }

        await image.decode?.()
      }),
    )
  }, MEDIA_TIMEOUT_MS)
}

export async function migratedSliceClip(page) {
  const viewport = page.viewportSize()
  const hero = await page
    .locator('section#home, section[data-framer-name="Hero Section"]')
    .first()
    .boundingBox()

  if (!viewport || !hero) {
    throw new Error("Unable to resolve the migrated Hero screenshot bounds")
  }

  return {
    x: 0,
    y: 0,
    width: viewport.width,
    // Avoid comparing the antialiased fractional boundary between this slice
    // and the still-unmigrated section below it.
    height: Math.min(viewport.height, Math.floor(hero.height)),
  }
}

export function desktopNavigation(page) {
  const homeLink = page.getByRole("link", { name: "Home", exact: true })

  return page
    .getByRole("navigation")
    .filter({ has: homeLink })
    .first()
}

export function openMenuControl(page) {
  return page
    .locator('button[aria-controls="responsive-navigation"]')
    .or(page.locator('[data-framer-name="Line Wrapper"]:visible'))
    .first()
}

export function closeMenuControl(page) {
  return openMenuControl(page)
}

export async function clickMenuControl(page, control) {
  // Framer's SSR markup can become visible well before React attaches the tap
  // handler. Waiting for the hydration marker avoids clicking inert markup.
  await expect
    .poll(
      () =>
        control.evaluate((element) =>
          Object.keys(element).some((key) => key.startsWith("__reactProps$")),
        ),
      { timeout: 15_000 },
    )
    .toBe(true)

  await control.click({ force: true })
}

export async function responsiveNavigationHeight(control) {
  return control.evaluate((element) => {
    const navigation = element.closest("nav")

    if (!navigation) throw new Error("Responsive menu control is not inside a nav")

    return navigation.getBoundingClientRect().height
  })
}

export async function setResponsiveNavigationState(page, control, shouldOpen) {
  const matchesTarget = (height) => (shouldOpen ? height > 300 : height < 100)

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const currentHeight = await responsiveNavigationHeight(control)
    if (matchesTarget(currentHeight)) return

    await clickMenuControl(page, control)
    await page.waitForTimeout(750)
  }

  const finalHeight = await responsiveNavigationHeight(control)
  if (!matchesTarget(finalHeight)) {
    throw new Error(
      `Responsive navigation did not reach the ${shouldOpen ? "open" : "closed"} state; height was ${finalHeight}px`,
    )
  }
}

export async function focusWithKeyboard(page, locator, maximumTabs = 8) {
  await page.evaluate(() => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  })

  for (let index = 0; index < maximumTabs; index += 1) {
    await page.keyboard.press("Tab")

    if (await locator.evaluate((element) => element === document.activeElement)) {
      return
    }
  }

  throw new Error(`Target did not receive keyboard focus within ${maximumTabs} tabs`)
}
