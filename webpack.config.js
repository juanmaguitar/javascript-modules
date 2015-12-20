var webpack = require("webpack");
var openBrowserPlugin = require('open-browser-webpack-plugin');
var path = require("path");

module.exports = {
    entry: {
        path: path.join(__dirname, "assets"),
        filename: './src/js/app.js'
    },
    output: {
        filename: 'dist/js/bundle.js'
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
            },
            { test: /\.json$/,   loader: "json-loader" },
            { test: /\.coffee$/, loader: "coffee-loader" },
            { test: /\.css$/,    loader: "style-loader!css-loader" },
            { test: /\.less$/,   loader: "style-loader!css-loader!less-loader" },
            { test: /\.jade$/,   loader: "jade-loader?self" },
            { test: /\.png$/,    loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.jpg$/,    loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.gif$/,    loader: "url-loader?prefix=img/&limit=5000" },
            { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000" },
            { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
            { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
            { test: /\.svg$/,    loader: "file-loader?prefix=font/" },
        ]
    },
    plugins: [
      new openBrowserPlugin({ url: 'http://localhost:8080/webpack-dev-server/' })
    ]
};
/*
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/js/app.js'),
    output: {
        path: __dirname + "/dist/js/",
        filename: 'bundle.js'
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
      new OpenBrowserPlugin({ url: 'http://localhost:3000' })
    ]
};
*/