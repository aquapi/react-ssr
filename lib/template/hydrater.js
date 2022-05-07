// @ts-check
/**
 * @param {string} componentPath 
 */
module.exports = function template(componentPath) {
    return `
        import React from "react";
        import ReactDOM from "react-dom/client";
        import App from "${componentPath}";

        const props = JSON.parse(document.getElementById(".props")?.innerHTML || "{}");

        ReactDOM.hydrateRoot(document.getElementById(".root"), <App {...props} />);
    `
}