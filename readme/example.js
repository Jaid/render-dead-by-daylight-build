import renderDeadByDaylightBuild from "render-dead-by-daylight-build"
import Jimp from "jimp"

const perkIds = ["wellMakeIt", "noMither", "selfCare", "headOn"]
const screenshotBuffer = await renderDeadByDaylightBuild(perkIds)

const jimp = await Jimp.read(screenshotBuffer)
await jimp.writeAsync("./build.png")