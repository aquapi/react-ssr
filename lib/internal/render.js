// @ts-check
const ReactDOM = require("react-dom/server");
const React = require("react");
const toAbs = require("../utils/toAbs");
const html = require("../template/html");
const { outComponentsBundle, outHydrateBundle, root } = require("./constants");

/**
 * @param {string} path 
 * @param {object} props
 */
module.exports = async function render(path, props) {
    // Get the component
    const Component = await import(toAbs(outComponentsBundle + path + ".js"))
        .then(module => module.default);

    // Get the page title
    let title;

    if (typeof Component.getTitle === "function") 
        title = Component.getTitle(props);
    else
        title = Component.title || "React App";

    // Render the component
    const rendered = ReactDOM.renderToString(React.createElement(Component.default, props));
    return html(outHydrateBundle.replace(root, "") + path + ".js", rendered, props, title);
}