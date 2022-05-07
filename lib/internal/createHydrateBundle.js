// @ts-check
const createHydrate = require("./createHydrate");
const { getAllFiles } = require("get-all-files");
const toNormal = require("../utils/toNormal");
const { webpack } = require("webpack");
const toAbs = require("../utils/toAbs");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const fs = require("fs");
const { outHydrate, outHydrateBundle } = require("./constants");
const getConfig = require("../utils/getConfig");

// Render root: #.root
// Props: #.props

// @ts-check
module.exports = async function createHydrateBundle() {
    await fs.promises.mkdir(outHydrate);
    await fs.promises.mkdir(outHydrateBundle);

    // Create hydrates
    // Then use webpack to create a bundle for each hydrate
    await createHydrate();

    // Get all files of the hydrate folder
    for await (const file of getAllFiles(outHydrate)) {
        const filePath = toNormal(file);
        const configClone = getConfig(filePath);

        // Run webpack
        await new Promise((resolve, reject) => {
            webpack(configClone, err => {
                if (err)
                    return reject(err);
                resolve();
            });
        });
    }

    // Delete the hydrate folder
    await fs.promises.rm(outHydrate, { recursive: true });
}