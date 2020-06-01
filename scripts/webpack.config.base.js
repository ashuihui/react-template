const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const styleVariables = require(path.resolve('./src/assets/style/variables.js'));
// const ManifestPlugin = require('webpack-manifest-plugin');
// const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const sassLoader = {
	loader: 'sass-loader',
	options: {
		prependData: Object.keys(styleVariables)
			.map((key) => `\$${key}: ${styleVariables[key]};`)
			.join('\n'),
	},
};
const cssModuleLoader = (isEnvProduction) => {
	return {
		loader: 'css-loader',
		options: {
			modules: {
				mode: 'local',
				localIdentName: isEnvProduction
					? '[local]-[hash:base64:8]'
					: '[path]_[name]_[local]',
			},
		},
	};
};
const lessAntd = {
	loader: 'less-loader',
	options: {
		lessOptions: { 
			javascriptEnabled: true,
			modifyVars: styleVariables,
		}
	}
};

module.exports = function (webpackEnv) {
	const isEnvProduction = webpackEnv === 'production';
	console.log('isEnvProduction=>', isEnvProduction);
	return {
		mode: isEnvProduction ? 'production' : 'development',
		entry: {
			index: './src/index.tsx',
			vendor: [
				'react',
				'react-dom',
				'react-redux',
				'react-router-dom',
				'redux',
				'iron-redux',
			],
		},
		output: {
			path: path.resolve('./cdn'),
			publicPath: '/',
			filename: isEnvProduction
				? 'js/[name]_[chunkhash:8].js'
				: 'js/[name].js',
			chunkFilename: isEnvProduction
				? 'js/[name]_[chunkhash:8].js'
				: 'js/[name].js',
		},
		resolve: {
			extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.scss', '.less'],
			alias: {
				'@src': path.resolve('./src'),
				'@common': path.resolve('./src/common'),
				'@config': path.resolve('./src/config'),
				'@assets': path.resolve('./src/assets'),
				'@components': path.resolve('./src/components'),
				'@containers': path.resolve('./src/containers'),
				'@constants': path.resolve('./src/constants'),
				'@interfaces': path.resolve('./src/interfaces'),
				'@models': path.resolve('./src/models'),
				'@reducers': path.resolve('./src/reducers'),
				'@actions': path.resolve('./src/actions'),
				'@utils': path.resolve('./src/utils'),
			},
		},
		module: {
			rules: [
				{
					enforce: 'pre',
					test: /\.tsx?$/,
					exclude: /node_modules/,
					include: path.resolve('./src'),
					loader: 'eslint-loader',
					options: {
						emitError: true,
						quiet: true,
					},
				},
				{
					test: /\.tsx?$/,
					include: path.resolve('./src'),
					exclude: /node_modules/,
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
					},
				},
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader', 'postcss-loader']
				},
				{
					test: /\.scss$/,
					exclude: /\.m\.scss$/,
					include: path.resolve('./src'),
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'postcss-loader',
						sassLoader,
					],
				},
				{
					test: /\.m\.scss$/,
					exclude: /node_modules/,
					include: path.resolve('./src'),
					use: [
						MiniCssExtractPlugin.loader,
						cssModuleLoader(isEnvProduction),
						'postcss-loader',
						sassLoader,
					],
				},
				{
					test: /\.less$/,
					exclude: /\.m\.less$/,
					// include: path.resolve('./src/node_module/antd/'),
					use: [
						MiniCssExtractPlugin.loader,
						'css-loader',
						'postcss-loader',
						lessAntd,
					],
				},
				{
					test: /\.m\.less$/,
					include: path.resolve('./src'),
					use: [
						MiniCssExtractPlugin.loader,
						cssModuleLoader(isEnvProduction),
						'postcss-loader',
						'less-loader'
					]
				},
				{
					test: /\.(png|jpg|gif|jpeg)$/,
					include: path.resolve('./src'),
					loader: 'url-loader',
					options: {
						limit: 5120,
						name: isEnvProduction
							? 'img/[name].[ext]'
							: 'img/[name]_[contenthash:8].[ext]',
					},
				},
				{
					test: /\.(eot|svg|ttf|woff)$/,
					include: path.resolve('./src'),
					loader: 'file-loader',
					options: {
						name: 'css/fonts/[name].[ext]',
					},
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				filename: 'index.html',
				template: './src/index.html',
			}),
			new AntdDayjsWebpackPlugin(),
			new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime-.+[.]js/]),
			new MiniCssExtractPlugin({
				filename: isEnvProduction
					? 'css/[name].[chunkhash:8].css'
					: 'css/[name].css',
				chunkFilename: isEnvProduction
					? 'css/[name].[chunkhash:8].css'
					: 'css/[name].css',
			}),
		].filter(Boolean),
		optimization: {
			/** 拆包 */
			splitChunks: {
				cacheGroups: {
					vendor: {
						chunks: 'initial',
						test: 'vendor',
						name: 'vendor',
						priority: 30,
						enforce: true,
					},
					commons: {
						test: /[\\/](src|node_modules)[\\/]/,
						name: 'commons',
						chunks: 'all',
						minChunks: 2,
						priority: 10,
						enforce: true,
					},
				},
			},
			minimizer: [
				new TerserPlugin({
					terserOptions: {
						compress: {
							pure_funcs: ['console.debug'],
						},
					},
				}),
			],
			runtimeChunk: {
				name: (entrypoint) => `runtime-${entrypoint.name}`,
			},
		},
		stats: {
			colors: true,
			children: false,
			chunks: false,
			chunkModules: false,
			modules: false,
		},
	};
};
