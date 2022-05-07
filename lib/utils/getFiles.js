// @ts-check
const { getAllFiles } = require("get-all-files");
const toNormal = require("./toNormal");

/**
 * @param {string} dir something like path/to, not path/to/
 */
module.exports = async function getFiles(dir) {
    const files = await getAllFiles(dir).toArray();
    return files.map(toNormal);
}