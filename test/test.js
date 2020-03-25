import fsp from "@absolunet/fsp"
import Jimp from "jimp"
import ms from "ms.macro"
import path from "path"

const indexModule = (process.env.MAIN ? path.resolve(process.env.MAIN) : path.join(__dirname, "..", "src")) |> require

/**
 * @type { import("../src") }
 */
const {default: renderDeadByDaylightBuild} = indexModule

it("should run", async () => {
  const outputFolder = path.resolve(__dirname, "..", "dist", "test")
  const outputFile = path.join(outputFolder, "build.png")
  await fsp.emptyDir(outputFolder)
  const screenshotBuffer = await renderDeadByDaylightBuild(["wellMakeIt", "noMither", "selfCare", "headOn"])
  const jimp = await Jimp.read(screenshotBuffer)
  await jimp.writeAsync(outputFile)
  const exists = await fsp.pathExists(outputFile)
  expect(exists).toBeTruthy()
}, ms`30 seconds`)