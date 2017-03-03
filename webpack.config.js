const path = require('path');
const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CheckPlugin = require('npm-check-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootDir = path.resolve(__dirname, '..');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(rootDir, 'build'),
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
     extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.html']
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: [
          {loader: 'awesome-typescript-loader',
            options: { configFileName: ('./tsconfig.json')}
          },
            'angular2-template-loader'],
        exclude: [/node_modules/, /typings/]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
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
            fallback: "style-loader"
        })
      },
      {
        test: /\.scss$/,
        include: './src',
        loader: ['raw-loader!postcss-loader!sass-loader']
      }
    ]
  },
  watch: NODE_ENV == 'development',
  devtool: NODE_ENV == 'development'? 'cheap-module-eval-source-map' : null,
  devServer: {
    host: "localhost",
    port: 9000,
    hot: true,
    watchOptions: {
      poll: true
    },
    publicPath: '/',
    historyApiFallback: true,
    stats: 'minimal'
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      './src',
      {}
    ),
    new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor', 'polyfills']
    }),
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      title: 'WebRecipes',
      cache: true,
      template: 'src/index.html',
      inject: true
    }),
    new CheckPlugin({
      autoInstall: false,
      silent: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
};

if(NODE_ENV !== "development") {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false,
      },
      output: {
          comments: false,
      },
  }));
}
