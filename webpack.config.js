const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    homePage: './src/homePage.js',
    menuPage: './src/menuPage.js',
    contactPage: './src/contactPage.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant Page',
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: './dist',
  },
  optimization: {
    runtimeChunk: 'single',
  },
};