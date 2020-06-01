const merge = require('webpack-merge');
const devConfig = require('./webpack.config.base');
const webpackConfig = merge(devConfig('development'), {
    devtool: 'source-map',
    devServer: {
        disableHostCheck: true,
        port: 9000,
        compress: true,
        inline: true,
        open: true,
        hot: true,
        progress: true,
    },
})

module.exports = webpackConfig;