// @ts-check
const esbuild = require('esbuild');
const getFiles = require('../utils/getFiles');
const { pages: pagesDir, endExt, outComponentsBundle } = require('./constants');
const { sassPlugin } = require('esbuild-sass-plugin');
const fs = require("fs");
const path = require('path');

module.exports = async function createComponent() {
    await fs.promises.mkdir(outComponentsBundle);

    // Bundle the component with esbuild "./.root/dev/comps"
    const files = await getFiles(pagesDir);

    for (let file of files) {
        if (!endExt.test(file))
            continue;

        // Build
        await esbuild.build({
            entryPoints: [file],
            bundle: true,
            outfile: file.replace(pagesDir, outComponentsBundle).replace(endExt, '.js'),
            minify: true,
            loader: {
                // JS files
                ".js": "tsx",
                ".ts": "tsx",
                ".tsx": "tsx",
                ".mjs": "tsx",
                ".es": "tsx",
                ".es6": "tsx",
                ".jsx": "tsx",
                // Assets
                ".png": "dataurl",
                ".jpg": "dataurl",
                ".jpeg": "dataurl",
                ".gif": "dataurl",
                ".svg": "dataurl",
                ".woff": "dataurl",
                ".woff2": "dataurl",
                ".ttf": "dataurl",
                ".eot": "dataurl",
                ".otf": "dataurl",
            },
            external: ["node_modules"],
            platform: "node",
            jsx: "transform",
            inject: [path.resolve(__dirname, "../utils/react-shim.js")],
            plugins: [sassPlugin()],
        });
    }
}