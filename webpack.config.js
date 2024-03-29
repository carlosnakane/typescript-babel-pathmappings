const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {

  entry: './src/index.ts',

  mode: 'production',

  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/',
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },

  module: {
    rules: [
      { test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.js$/, loader: 'source-map-loader', enforce: 'pre' },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin(), // Make sure that you're typechecking your code while webpack is building
  ],
};