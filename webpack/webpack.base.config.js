const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: ['babel-polyfill'],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  context: resolve(__dirname, '../client'),
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.(s?css|sass)$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }, {
        loader: 'sass-loader',
        options: {
          includePaths: ['./node_modules'],
        },
      }],
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: 'file-loader',
    }, {
      test: /\.(eot|woff|woff2|svg|ttf)([?]?.*)$/,
      use: 'file-loader',
    }],
  },
  resolve: {
    modules: [resolve(__dirname, '../client'), 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.scss', '.css'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: '../dist/index.html',
    }),
    new Dotenv({
      path: resolve(__dirname, '../.env'),
      systemvars: true,
    }),
  ],
};
