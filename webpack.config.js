var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/App.js',
  output: { path: path.resolve(__dirname, 'build'), filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map'
};
