// @ts-check
const outHydrate = "./.root/hydrate";
const outHydrateBundle = "./.root/dev/hydrates";
const outComponentsBundle = "./.root/dev/comps";
const outDev = "./.root/dev";
const root = "./.root";
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