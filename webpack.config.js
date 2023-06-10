const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
};