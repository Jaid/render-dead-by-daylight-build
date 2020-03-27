# render-dead-by-daylight-build


<a href="https://raw.githubusercontent.com/jaid/render-dead-by-daylight-build/master/license.txt"><img src="https://img.shields.io/github/license/jaid/render-dead-by-daylight-build?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor render-dead-by-daylight-build"/></a>  
<a href="https://actions-badge.atrox.dev/jaid/render-dead-by-daylight-build/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Frender-dead-by-daylight-build%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/render-dead-by-daylight-build/commits"><img src="https://img.shields.io/github/commits-since/jaid/render-dead-by-daylight-build/v1.1.0?style=flat-square&logo=github" alt="Commits since v1.1.0"/></a> <a href="https://github.com/jaid/render-dead-by-daylight-build/commits"><img src="https://img.shields.io/github/last-commit/jaid/render-dead-by-daylight-build?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/render-dead-by-daylight-build/issues"><img src="https://img.shields.io/github/issues/jaid/render-dead-by-daylight-build?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/render-dead-by-daylight-build"><img src="https://img.shields.io/npm/v/render-dead-by-daylight-build?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/render-dead-by-daylight-build/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/render-dead-by-daylight-build?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/render-dead-by-daylight-build"><img src="https://img.shields.io/npm/dm/render-dead-by-daylight-build?style=flat-square&logo=npm" alt="Downloads"/></a>

**Creates an image of a Dead by Daylight build.**





## Installation

<a href="https://npmjs.com/package/render-dead-by-daylight-build"><img src="https://img.shields.io/badge/npm-render--dead--by--daylight--build-C23039?style=flat-square&logo=npm" alt="render-dead-by-daylight-build on npm"/></a>

```bash
npm install --save render-dead-by-daylight-build@^1.1.0
```

<a href="https://yarnpkg.com/package/render-dead-by-daylight-build"><img src="https://img.shields.io/badge/Yarn-render--dead--by--daylight--build-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="render-dead-by-daylight-build on Yarn"/></a>

```bash
yarn add render-dead-by-daylight-build@^1.1.0
```

<a href="https://github.com/jaid/render-dead-by-daylight-build/packages"><img src="https://img.shields.io/badge/GitHub Packages-@jaid/render--dead--by--daylight--build-24282e?style=flat-square&logo=github" alt="@jaid/render-dead-by-daylight-build on GitHub Packages"/></a>  
(if [configured properly](https://help.github.com/en/github/managing-packages-with-github-packages/configuring-npm-for-use-with-github-packages))

```bash
npm install --save @jaid/render-dead-by-daylight-build@^1.1.0
```



## Example

![Example Screenshot](./readme/example.png)

This image is rendered by this code:
```javascript
import renderDeadByDaylightBuild from "render-dead-by-daylight-build"
import Jimp from "jimp"

const perkIds = ["wellMakeIt", "noMither", "selfCare", "headOn"]
const screenshotBuffer = await renderDeadByDaylightBuild(perkIds)

const jimp = await Jimp.read(screenshotBuffer)
await jimp.writeAsync("./build.png")
```


















## Development



Setting up:
```bash
git clone git@github.com:jaid/render-dead-by-daylight-build.git
cd render-dead-by-daylight-build
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
[MIT License](https://raw.githubusercontent.com/jaid/render-dead-by-daylight-build/master/license.txt)  
Copyright © 2020, Jaid \<jaid.jsx@gmail.com> (https://github.com/jaid)
