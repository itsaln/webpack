const webpack = require('webpack')
const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  output: {
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
    port: 2323
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
