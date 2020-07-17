const path = require('path');
const merge = require('webpack-merge');
const base = require('./base.js');

module.exports = merge(base, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(process.cwd(), "dist")
  }
});