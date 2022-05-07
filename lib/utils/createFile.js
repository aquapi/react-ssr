// @ts-check
const path = require("path");
const fs = require("fs");

/**
 * @param {string} filePath 
 */
module.exports = async function createFile(filePath, content = "") {
    const dir = path.dirname(filePath);
    while (!fs.existsSync(dir))
        await fs.promises.mkdir(dir, { recursive: true });
    await fs.promises.appendFile(filePath, content);
}