const createHydrateBundle = require("./createHydrateBundle");
const fs = require("fs");
const { root, outDev } = require("./constants");
const createComponent = require("./createComponent");

module.exports = async function createRoot() {
    // Create required folders
    if (fs.existsSync(root))
        await fs.promises.rm(root, { recursive: true });

    await fs.promises.mkdir(root);
    await fs.promises.mkdir(outDev);

    await createHydrateBundle();
    await createComponent();
}