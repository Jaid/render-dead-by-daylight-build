/** @module render-dead-by-daylight-build */

import puppeteer from "puppeteer"

const selector = "#showcase"

/**
 * @returns {Buffer}
 */
export default async objectIds => {
  let browser
  try {
    browser = await puppeteer.launch({
      defaultViewport: {
        width: 1200,
        height: 1200,
      },
      devtools: false,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--font-render-hinting=medium",
        "--enable-font-antialiasing",
      ],
    })
    const page = await browser.newPage()
    await page.goto(`https://entity.works/showcase/${objectIds.join(",")}`, {waitUntil: "networkidle0"})
    await page.waitForSelector(selector)
    await page.addStyleTag({
      content: "body {background: transparent}",
    })
    const element = await page.$(selector)
    const buffer = await element.screenshot({
      omitBackground: true,
    })
    await browser.close()
    return buffer
  } catch (error) {
    console.error("Failed to run %s", error)
  }
  await browser?.close()
}