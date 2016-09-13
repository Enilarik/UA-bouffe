const path              = require('path');
const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssnext      = require('postcss-cssnext');
const nested       = require('postcss-nested');
const atImport     = require('postcss-import');

const root = (...args) => path.join(__dirname, 'src', ...args);

const webpackConfig = {
  name    : 'client',
  target  : 'web',
  devtool : 'source-map',
  entry   : root('app.js'),
  output  : {
    filename  : 'bundle.js',
    path      : root('..', 'dist'),
    publicPath: '/dist/'
  },
  resolve : {
    root       : root(),
    extensions : ['', '.js', '.jsx', '.json']
  },
  module : {
    loaders: [
      {
        test   : /\.jsx?/,
        loader : 'babel',
        exclude: /node_modules/,
        query  : {
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.json/,
        loader: 'json'
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css?sourceMap&minimize&-url!postcss')
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('styles.css')
  ],
  postcss: webpack => [
    atImport({
      paths: [
        root('css'),
        root('..', 'node_modules')
      ],
      addDependencyTo: webpack
    }),
    nested,
    cssnext({
      browsers: '> 0%'
    })
  ]
};

module.exports = webpackConfig
