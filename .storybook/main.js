const devConfig = require('../scripts/webpack.config.base');
const merge = require('webpack-merge');

module.exports = {
	stories: ['../doc/stories/**/*.stories.js'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-links',
		'@storybook/addon-knobs/register',
	],
	webpackFinal: async (config) => {
		let webpackConfig = merge(devConfig('development'), config);
		return webpackConfig;
	},
};
