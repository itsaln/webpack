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
		app: `${PATHS.src}/main.ts`
		// module: `${PATHS.src}/your-module.js`,
	},
	output: {
		path: PATHS.dist,
		clean: true
	},
	module: {
		rules: [
			{
				// JavaScript
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				// TypeScript
				test: /\.(ts|tsx)?$/,
				exclude: /node_modules/,
				use: 'ts-loader'
			},
			{
				// Styles
				test: /\.(s[ac]|c)ss$/i,
				use: [
					// 'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true
						}
					},
					'sass-loader'
				]
			},
			{
				// Fonts
				test: /\.(woff(2)?|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: `${PATHS.assets}/fonts/[name].[hash][ext]`
				}
			}
		]
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
	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js'],
		alias: {
			'~': PATHS.src, // Example: import Dog from '~/assets/images/dog.jpg'
			'@': `${PATHS.src}/js` // Example: import Sort from '@/utils/sort.js'
		}
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					// Static (copy to '/'):
					from: `${PATHS.src}/static`,
					to: `${PATHS.dist}`
				},
				{
					// Images (copy to '/assets/fonts'):
					from: `${PATHS.src}/${PATHS.assets}/fonts`,
					to: `${PATHS.assets}/fonts`
				},
				{
					// Images (copy to '/assets/images'):
					from: `${PATHS.src}/${PATHS.assets}/images`,
					to: `${PATHS.assets}/images`
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
