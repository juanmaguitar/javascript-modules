var webpack = require("webpack");
var openBrowserPlugin = require('open-browser-webpack-plugin');
var path = require("path");
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var openBrowser = new openBrowserPlugin({ url: 'http://localhost:8080/webpack-dev-server/' })

module.exports = {
    entry: {
        // path: path.join(__dirname, "assets"),
        app : './src/js/app.js'
    },
    output: {
        path: 'dist/js/',
      publicPath: './dist/js/',
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