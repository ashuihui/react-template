module.exports = {
	plugins: {
		{{#if vw}}
		'postcss-px-to-viewport': {
			{{#if pc}}
			viewportWidth: 1920,
			{{/if}}
			{{#if m}}
			viewportWidth: 750,
			viewportHeight: 1334, 
			{{/if}}
			unitPrecision: 3,  
			selectorBlackList: ['.ignore'],
			minPixelValue: 1,
			mediaQuery: true,
		},
		{{/if}}
		'postcss-preset-env': {
			autoprefixer: {
				grid: true,
			},
		},
		'postcss-flexbugs-fixes': {},
	},
};
