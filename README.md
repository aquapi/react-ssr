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
// Use this with nodemon to rebuild when anything change
await ssr.build();

// Create an express server
const app = express();

// Serve the hydrate file
app.use(express.static(".root"));

// Render the homepage on every request ("./pages/home.js")
app.use(async (req, res) => {
    const content = await ssr.renderToHTML("/home");
    res.end(content);
});

// Start the server
app.listen(8080);
```

# Documentation
- `build(): Promise<void>`: Generate a `.root` directory. `renderToHTML` can't work before calling this.
- `renderToHTML(): Promise<string>`: Render a page to HTML string. You need to serve the `.root` directory as a static for this to work.