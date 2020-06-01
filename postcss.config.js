module.exports = {
	plugins: {
		'postcss-px-to-viewport': {
			viewportWidth: 1920,
			landscapeWidth: 1920,
			selectorBlackList: ['.ignore'],
			minPixelValue: 1,
			mediaQuery: true,
		},
		'postcss-preset-env': {
			autoprefixer: {
				grid: true,
			},
		},
		'postcss-flexbugs-fixes': {},
	},
};
