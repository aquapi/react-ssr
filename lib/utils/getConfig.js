// @ts-check
const { outHydrate, outHydrateBundle } = require("../internal/constants");
const toAbs = require("./toAbs");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 * @param {string} filePath 
 */
module.exports = function getConfig(filePath) {
    /**
     * @type {import('webpack').Configuration}
     */
    const configClone = {
        entry: filePath,
        output: {
            path: toAbs(outHydrateBundle),
            filename: filePath.replace(outHydrate + "/", ""),
        },
        mode: 'development',
        optimization: {
            minimize: true,
        },
        plugins: [
            new CleanWebpackPlugin({
                protectWebpackAssets: false,
                cleanAfterEveryBuildPatterns: ['*.LICENSE.txt'],
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.(js|ts|mjs|es|es6|jsx|tsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                "@babel/preset-env",
                                ["@babel/preset-react", {
                                    "runtime": "automatic"
                                }],
                                "@babel/preset-typescript"
                            ],
                            plugins: [
                                "@babel/plugin-transform-runtime"
                            ]
                        },
                    },
                },
                {
                    test: /\.(css|scss|sass)$/,
                    use: [
                        'style-loader', 
                        'css-loader', 
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                    type: "asset/inline",
                }
            ]
        },
    };

    return configClone;
}