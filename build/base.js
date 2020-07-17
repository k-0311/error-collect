const path = require('path')
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: 'ec.js',
    library: 'ec',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({ // 定义环境变量
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|dist)/,
        include: path.join(process.cwd(), 'src'),
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
  externals: {
    ec: {
      commonjs: 'ec',
      commonjs2: 'ec',
      amd: 'ec',
      root: 'ec'
    },
    detector: {
      commonjs: 'detector',
      commonjs2: 'detector',
      amd: 'detector',
      root: 'detector'
    }
  },
  resolve: {
    alias: {
      '@': path.join(process.cwd(), 'src')
    }
  }
}