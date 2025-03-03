const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const mqpacker = require('mqpacker')
const cssnano = require('cssnano')

module.exports = {
	plugins: [
		'postcss-preset-env',
		tailwindcss,
		autoprefixer,
		mqpacker,
		cssnano({
			preset: [
				'default',
				{
					discardComments: {
						removeAll: true
					}
				}
			]
		})
	]
}
