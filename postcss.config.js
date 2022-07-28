module.exports = {
  plugins: [
    'postcss-preset-env',
    require('autoprefixer'),
    require('mqpacker'),
    require('cssnano')({
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
