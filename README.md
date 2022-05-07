# React SSR
A library for SSR using React 18

## Installation
```bash
# Using NPM
npm i react-ss

# Using yarn
yarn add react-ss
```

Make sure you have React and React DOM installed.

## Example usage
```javascript
import ssr from "react-ss";
import express from "express";

// Create the root to render
await ssr.createRoot();

// Create an express server
const app = express();

// Add the middleware
app.use(async (req, res) => {
    // Render the content
    const content = await ssr.renderToHTML("/home");

    // Write the content to response
    res.end(content);
});

// Start the server
app.listen(8080);
```