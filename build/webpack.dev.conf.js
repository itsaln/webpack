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
    static: {
      directory: baseWebpackConfig.externals.paths.dist,
    },
    compress: true,
    port: 2323,
    // overlay: {
    //   warnings: true,
    //   errors: true
    // }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
