// @ts-check
const path = require('path');

/**
 * @param {string} str 
 */
module.exports = function toAbs(str) {
    const resolved = path.resolve(str);

    return resolved
        // Slice out the disk drive letter
        .substring(resolved.indexOf(":") + 1)
        // To normal
        .split("\\").join("/");
}