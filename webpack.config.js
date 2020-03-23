const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ec.js',
    // library: 'errorCollect',
    // globalObject: 'this',
    // libraryTarget: 'umd'
  },
  devtool: 'inline-source-map',
  plugins: [
    // new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        // include: [path.resolve(__dirname, 'src')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ]
  },
  // externals: {
  //   detector: {
  //     commonjs: 'detector',
  //     commonjs2: 'detector',
  //     amd: 'detector',
  //     root: 'detector'
  //   }
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}