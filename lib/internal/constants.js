// @ts-check
const root = "./.root";
const outDev = root + "/.dev";

const outHydrate = root + "/hydrate";
const outHydrateBundle = outDev + "/hydrates";

const outComponentsBundle = outDev + "/comps";

const pages = "./pages";

const endExt = /\.(js|ts|mjs|es|es6|jsx|tsx)$/;

module.exports = {
    outComponentsBundle,
    endExt,
    root,
    pages,
    outDev,
    outHydrate,
    outHydrateBundle,
}