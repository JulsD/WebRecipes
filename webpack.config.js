const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CheckPlugin = require('npm-check-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'app')
  },
  resolve: {
     extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
            use: [{
                loader: "css-loader"
            }, {
                loader: "postcss-loader"
            }, {
                loader: "sass-loader"
            }],
            // use style-loader in development
            fallback: "style-loader"
        })
      }
    ]
  },
  watch: NODE_ENV == 'development',
  devtool: NODE_ENV == 'development'? "source-map" : null,
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
        },
        output: {
            comments: false,
        },
    }),
    new HtmlWebpackPlugin({
      title: 'WebRecipes',
      cache: true,
      template: 'src/index.html',
      inject: true
    }),
    new CheckPlugin({
      autoInstall: false,
      silent: true
    })
  ]
};
