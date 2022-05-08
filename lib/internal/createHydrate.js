// @ts-check
const { getAllFiles } = require("get-all-files");
const path = require("path");
const hydrater = require("../template/hydrater");
const createFile = require("../utils/createFile");
const toNormal = require("../utils/toNormal");
const fs = require("fs");
const { root, pages: pagesDir, outHydrate, endExt } = require("./constants");
const getFiles = require("../utils/getFiles");

module.exports = async function createHydrate() {
    if (fs.existsSync(root))
        await fs.promises.rm(root, { recursive: true });

    // Get all files
    const pages = await getFiles(pagesDir);

    // Create hydrate
    for (let pagePath of pages) {
        if (!endExt.test(pagePath)) continue;

        // Pathname in ./pages of the component
        const basename = pagePath.replace(pagesDir, "");

        const hydratePath = outHydrate + basename;

        // Import path from the hydrate file to the component
        const importPath = toNormal(
            // Join the import path with the base name
            path.join(
                // Relative path from .root/hydrate to ./pages
                path.relative(
                    path.dirname(hydratePath),
                    path.dirname(pagePath.replace(endExt, ".js"))
                ),
                basename
            )
        );

        // This one create a file (which adds event listener and stuff)
        await createFile(hydratePath.replace(endExt, ".js"), hydrater(importPath));
    }
}