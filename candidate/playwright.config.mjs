import path from "node:path"
import { fileURLToPath } from "node:url"

import { defineConfig } from "@playwright/test"

const configDirectory = path.dirname(fileURLToPath(import.meta.url))
const visualBaseUrl = process.env.VISUAL_BASE_URL

if (!visualBaseUrl) {
  throw new Error(
    "VISUAL_BASE_URL is required. Point it at the approved live site or a running candidate preview.",
  )
}

const viewports = [
  { name: "desktop-1440", width: 1440, height: 1000 },
  { name: "tablet-1024", width: 1024, height: 900 },
  { name: "tablet-768", width: 768, height: 900 },
  { name: "mobile-390", width: 390, height: 844 },
]

export default defineConfig({
  testDir: path.join(configDirectory, "tests/visual"),
  outputDir: path.join(configDirectory, "tests/visual/test-results"),
  snapshotPathTemplate: path.join(
    configDirectory,
    "tests/visual/__screenshots__/{testFilePath}/{projectName}/{arg}{ext}",
  ),
  fullyParallel: false,
  workers: 1,
  retries: 0,
  timeout: 30_000,
  expect: {
    timeout: 10_000,
    toHaveScreenshot: {
      animations: "disabled",
      caret: "hide",
      scale: "css",
    },
  },
  reporter: [
    ["list"],
    [
      "html",
      {
        open: "never",
        outputFolder: path.join(
          configDirectory,
          "tests/visual/playwright-report",
        ),
      },
    ],
  ],
  use: {
    baseURL: visualBaseUrl,
    browserName: "chromium",
    channel: "chrome",
    colorScheme: "light",
    deviceScaleFactor: 1,
    headless: true,
    locale: "en-US",
    reducedMotion: "no-preference",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
    video: "off",
  },
  projects: viewports.map(({ name, width, height }) => ({
    name,
    use: { viewport: { width, height } },
  })),
})
