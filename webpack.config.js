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
 use: [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
       modules: true,
       localIdentName: '[path][name]__[local]--[hash:base64:5]'
     }
    },
  ]
}
    ]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map'
};
