
const devConfig = require('./webpack.dev')

const prodConfig = {
  entry: {
    ...devConfig.entry,
  },
  output: {
    ...devConfig.output,
  },
  module: {
    rules: [
      ...devConfig.module.rules,
    ]
  }
}


module.exports = {
  ...devConfig,
  entry: prodConfig.entry,
  output: prodConfig.output,
  module: prodConfig.module,
  mode: 'production',
  devtool: 'source-map',
}