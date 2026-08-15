import { expect, test } from "@playwright/test"

import {
  closeMenuControl,
  desktopNavigation,
  focusWithKeyboard,
  migratedSliceClip,
  openMenuControl,
  openSettledHome,
  setResponsiveNavigationState,
} from "./helpers/stabilize.mjs"

const measuredGeometry = {
  1440: {
    hero: { x: 0, y: 0, width: 1440, height: 1000 },
    heading: { x: 60, y: 329.8, width: 630, height: 142.59 },
    video: { x: 70, y: 610.39, width: 218, height: 130 },
    description: { x: 1030, y: 683.2, width: 350, height: 153.98 },
  },
  1024: {
    hero: { x: 0, y: 0, width: 1024, height: 670.2 },
    heading: { x: 30, y: 183, width: 600, height: 110.41 },
    video: { x: 40, y: 383.41, width: 218, height: 130 },
    description: { x: 644, y: 456.22, width: 350, height: 153.98 },
  },
  768: {
    hero: { x: 0, y: 0, width: 768, height: 670.2 },
    heading: { x: 30, y: 183, width: 600, height: 110.41 },
    video: { x: 40, y: 383.41, width: 218, height: 130 },
    description: { x: 388, y: 456.22, width: 350, height: 153.98 },
  },
  390: {
    hero: { x: 0, y: 0, width: 390, height: 804.89 },
    heading: { x: 20, y: 163, width: 350, height: 131.11 },
    video: { x: 30, y: 344.11, width: 218, height: 130 },
    description: { x: 20, y: 594.91, width: 350, height: 149.98 },
  },
}

async function renderedRect(locator) {
  return locator.evaluate((element) => {
    const rect = element.getBoundingClientRect()

    return {
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
    }
  })
}

function expectRectToMatch(actual, expected) {
  for (const key of ["x", "y", "width", "height"]) {
    expect.soft(Math.abs(actual[key] - expected[key])).toBeLessThan(0.75)
  }
}

test.describe("migrated shell, header, and hero", () => {
  test("matches the measured section geometry and media contract", async ({
    page,
  }) => {
    await openSettledHome(page)

    const viewportWidth = page.viewportSize()?.width
    const expected = measuredGeometry[viewportWidth]
    if (!expected) throw new Error(`No geometry contract for ${viewportWidth}px`)

    const hero = page
      .locator('section#home, section[data-framer-name="Hero Section"]')
      .first()
    const heading = page.getByRole("heading", {
      level: 1,
      name: /Innovative Technology for Agricultural Growth/i,
    })
    const video = page.locator("video").first()
    const description = page
      .locator(
        '[data-testid="hero-description"], [data-framer-name="Button & Description"]',
      )
      .first()

    expectRectToMatch(await renderedRect(hero), expected.hero)
    expectRectToMatch(await renderedRect(heading), expected.heading)
    expectRectToMatch(await renderedRect(video), expected.video)
    expectRectToMatch(await renderedRect(description), expected.description)

    await expect(video).toHaveJSProperty("muted", true)
    await expect(video).toHaveJSProperty("loop", true)
    await expect(video).toHaveJSProperty("playsInline", true)

    // Framer's headless reference does not expose its scripted play request as
    // an autoplay DOM property at every breakpoint. The candidate owns this
    // contract explicitly, so assert both its declaration and real playback.
    if ((await video.getAttribute("data-testid")) === "hero-video") {
      await expect(video).toHaveJSProperty("autoplay", true)
      await expect
        .poll(() => video.evaluate((element) => element.currentTime))
        .toBeGreaterThan(0)
    }
  })

  test("matches the settled initial viewport", async ({ page }) => {
    await openSettledHome(page)

    await expect(page).toHaveScreenshot("home-settled.png", {
      clip: await migratedSliceClip(page),
    })
  })

  test("preserves the desktop navigation hover treatment", async ({
    page,
  }) => {
    test.skip(
      (page.viewportSize()?.width ?? 0) < 1200,
      "Desktop navigation is rendered only at 1200px and above",
    )

    await openSettledHome(page)

    const navigation = desktopNavigation(page)
    const homeLink = navigation.getByRole("link", {
      name: "Home",
      exact: true,
    })

    await expect(navigation).toBeVisible()
    await homeLink.hover()
    await page.waitForTimeout(450)

    await expect(page).toHaveScreenshot("desktop-home-hover.png", {
      clip: await migratedSliceClip(page),
    })
  })

  test("keeps desktop navigation keyboard focus visible", async ({ page }) => {
    test.skip(
      (page.viewportSize()?.width ?? 0) < 1200,
      "Desktop navigation is rendered only at 1200px and above",
    )

    await openSettledHome(page)

    const navigation = desktopNavigation(page)
    const homeLink = navigation.getByRole("link", {
      name: "Home",
      exact: true,
    })

    await focusWithKeyboard(page, homeLink)
    await expect(homeLink).toBeFocused()

    await expect(page).toHaveScreenshot("desktop-home-focus.png", {
      clip: await migratedSliceClip(page),
    })
  })

  test("opens and closes the responsive navigation", async ({ page }) => {
    test.skip(
      (page.viewportSize()?.width ?? 0) >= 1200,
      "Responsive menu is rendered only below 1200px",
    )

    await openSettledHome(page)

    const openControl = openMenuControl(page)
    await expect(openControl).toBeVisible()
    await setResponsiveNavigationState(page, openControl, true)

    const contactLink = page
      .getByRole("link", { name: /Contact Us/i, exact: true })
      .first()
    await expect(contactLink).toBeVisible()
    await page.waitForTimeout(500)

    await expect(page).toHaveScreenshot("responsive-menu-open.png", {
      clip: await migratedSliceClip(page),
    })

    const closeControl = closeMenuControl(page)
    await expect(closeControl).toBeVisible()
    await setResponsiveNavigationState(page, closeControl, false)
    await page.waitForTimeout(500)

    await expect(page).toHaveScreenshot("responsive-menu-closed.png", {
      clip: await migratedSliceClip(page),
    })
  })
})
