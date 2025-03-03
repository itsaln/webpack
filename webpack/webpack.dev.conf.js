const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
    filename: `${baseWebpackConfig.externals.paths.assets}/js/[name].bundle.js`,
    publicPath: '/'
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    static: {
      directory: baseWebpackConfig.externals.paths.dist
    },
    open: true,
    compress: true,
    hot: true,
    port: 3000
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: `${baseWebpackConfig.externals.paths.assets}/css/[name].bundle.css`
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
