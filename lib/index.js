const ssr = {
    async build() {
        return require("./internal/createRoot")();
    },

    async renderToHTML(path, props = {}) {
        return require("./internal/render")(path, props);
    },
}

module.exports = ssr;