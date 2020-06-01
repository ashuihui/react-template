const webpack = require('webpack');
const merge = require('webpack-merge');
const devConfig = require('./webpack.config.base');

const webpackConfig = merge(devConfig('development'), {
    devtool: false,
    plugins: [
    ]
})

module.exports = webpackConfig;
