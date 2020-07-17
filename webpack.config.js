// import { Configuration } from 'webpack'

/**
 * @type {Configuration}
 */
// const Config = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js'
//   },
//   mode: 'none'
// }

console.log(process.argv)

const Config = {
  entry: './src/main.css',
  output: {
    filename: 'bundle.js'
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}

module.exports = Config

