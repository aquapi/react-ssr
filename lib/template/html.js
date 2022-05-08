module.exports = function pageTemplate(scriptPath, renderedContent, props, title = "Document") {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
        </head>
        <body>
            <div id=".root">${renderedContent}</div>
            <div id=".props" style="display: none !important">${JSON.stringify(props)}</div>
            <script src="${scriptPath}"></script>
        </body>
    `
}