const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist'),
	assets: 'assets'
}

const PAGES_DIR = PATHS.src
const PAGES = fs.readdirSync(PAGES_DIR).filter((fileName) => fileName.endsWith('.html'))

module.exports = {
	externals: {
		paths: PATHS
	},
	entry: {
		app: `${PATHS.src}/main.js`
		// module: `${PATHS.src}/your-module.js`,
	},
	output: {
		path: PATHS.dist,
		clean: true
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendors',
					test: /node_modules/,
					chunks: 'all',
					enforce: true
				}
			}
		}
	},
	module: {
		rules: [
			{
				// JavaScript
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				// Fonts
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader',
				options: {
					name: '[name].[contenthash].[ext]'
				}
			},
			{
				// images / icons
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			},
			{
				// s[ac]ss
				test: /\.s[ac]ss$/i,
				use: [
					// 'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true
						}
					},
					'sass-loader'
				]
			}
		]
	},
	resolve: {
		alias: {
			'~': PATHS.src, // Example: import Dog from "~/assets/img/dog.jpg"
			'@': `${PATHS.src}/js` // Example: import Sort from "@/utils/sort.js"
		}
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				// Images:
				{
					from: `${PATHS.src}/${PATHS.assets}/img`,
					to: `${PATHS.assets}/img`
				},
				// Static (copy to '/'):
				{
					from: `${PATHS.src}/static`,
					to: ''
				}
			]
		}),
		...PAGES.map(
			(page) =>
				new HtmlWebpackPlugin({
					template: `${PAGES_DIR}/${page}`,
					filename: `./${page}`
				})
		)
	]
}
