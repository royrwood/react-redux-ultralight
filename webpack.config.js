const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, './build');
const JSX_DIR = path.resolve(__dirname, './src/jsx');
const CSS_DIR = path.resolve(__dirname, './src/css');
const HTML_DIR = path.resolve(__dirname, './src/html');

const config = {
    entry: JSX_DIR + '/index.jsx',

    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                include: JSX_DIR,
                loader: 'babel-loader',
                query: { babelrc: false, presets: ["es2015", "react"], "plugins": ["syntax-object-rest-spread", "transform-object-rest-spread"] }
            },
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            { from: HTML_DIR + '/index.html', to: BUILD_DIR },
            { from: CSS_DIR + '/index.css', to: BUILD_DIR }
        ])
    ],

    devtool: "source-map"

};

module.exports = config;