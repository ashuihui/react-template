module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		es6: true,
		node: true,
		browser: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		// "plugin:@typescript-eslint/recommended",
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	plugins: [
		// "@typescript-eslint",
		'react',
		'prettier',
	],
	globals: {
		_: true,
		browser: true,
		document: true,
		navigator: true,
		window: true,
		node: true,
		safari: true,
		opr: true,
		it: true,
		describe: true,
		expect: true,
	},
	rules: {
		'no-unused-vars': 0,
		// interface 必须以'I'开头
		// '@typescript-eslint/interface-name-prefix': 1,
	},
};
