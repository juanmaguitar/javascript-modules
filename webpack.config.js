var webpack = require("webpack");
var path = require("path");
var openBrowserPlugin = require('open-browser-webpack-plugin');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var openBrowser = new openBrowserPlugin({ url: 'http://localhost:8080/webpack-dev-server/' })


module.exports = {
    entry: {
        app: "./src/js/app.js",
        page2: "./src/js/page2.js"
    },
    output: {
        path: path.join(__dirname, "dist/js"),
        publicPath: 'dist/js/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel',
              query: {
                presets: ['es2015']
              }
            }
        ]
    },
    plugins: [
      //commonsPlugin,
      openBrowser
    ]
};