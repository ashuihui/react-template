const webpack = require('webpack');
const merge = require('webpack-merge');
const devConfig = require('./webpack.config.base');

const webpackConfig = merge(devConfig('production'), {
    devtool: 'hidden-source-map',
    plugins: [

    ],
});

module.exports = webpackConfig;