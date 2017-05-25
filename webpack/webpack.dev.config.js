const Webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.base.config'), {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './index.jsx',
  ],
  plugins: [
    new Webpack.optimize.OccurrenceOrderPlugin(),
    new Webpack.HotModuleReplacementPlugin(),
  ],
});
