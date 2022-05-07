// @ts-check
const ReactDOM = require("react-dom/server");
const React = require("react");
const toAbs = require("../utils/toAbs");
const html = require("../template/html");
const { outComponentsBundle, outHydrateBundle } = require("./constants");

/**
 * @param {string} path 
 * @param {object} props
 */
module.exports = async function render(path, props) {
    // Get the component
    const Component = await import(toAbs(outComponentsBundle + path + ".js")).then(module => module.default);

    const title = Component.title;

    // Render the component
    const rendered = ReactDOM.renderToString(React.createElement(Component.default, props));
    return html(outHydrateBundle + path + ".js", rendered, props, title);
}