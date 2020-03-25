/** @module render-dead-by-daylight-build */

/**
 * @returns {number} Seconds passed since Unix epoch (01 January 1970)
 */
export default () => {
  return Math.floor(Date.now() / 1000)
}