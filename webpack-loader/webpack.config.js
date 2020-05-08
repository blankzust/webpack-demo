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

const Config = {
  entry: {
    demo1: './demo.md',
    demo2: './demo2.md'
  },
  output: {
    filename: '[name].bundle.js'
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /demo\.md$/,
        use: [
          './index.js'
        ]
      },
      {
        test: /demo2\.md$/,
        use: [
          'html-loader',
          './index2.js'
        ]
      }
    ]
  }
}

module.exports = Config

