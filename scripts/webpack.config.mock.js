const webpack = require('webpack');
const merge = require('webpack-merge');
const devConfig = require('./webpack.config.local');

const webpackConfig = merge(devConfig, {
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('mock'),
			},
		}),
	],
});

module.exports = webpackConfig;
