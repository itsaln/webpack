const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseWebpackConfig = require('./webpack.base.conf')

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    filename: `${baseWebpackConfig.externals.paths.assets}/js/[name].bundle.min.js`,
    publicPath: './'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${baseWebpackConfig.externals.paths.assets}/css/[name].bundle.min.css`
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})
