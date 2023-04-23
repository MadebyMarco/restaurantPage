const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    homePage: './src/homePage.js',
    menuPage: './src/menuPage.js',
    contactPage: './src/contactPage.js',
    initialPageLoading: './src/initialPageLoading.js'
  }
  ,
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant Page',
    }),
  ]
  ,
  output: {
    filename: '[name].bundle.js',
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
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};