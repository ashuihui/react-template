const merge = require('webpack-merge');
const devConfig = require('./webpack.config.prod');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const webpackConfig = merge(devConfig, {
     plugins: [
        new BundleAnalyzerPlugin()
     ],
})

module.exports = webpackConfig;