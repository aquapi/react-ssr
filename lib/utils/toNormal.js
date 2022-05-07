// @ts-check
/**
 * @param {string} str 
 */
module.exports = function toNormal(str) {
    return str.split("\\").join("/");
}