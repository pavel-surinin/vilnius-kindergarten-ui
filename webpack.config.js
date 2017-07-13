var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './src/App.js',
    output: {path: path.resolve(__dirname, 'build'), filename: 'bundle.js'},
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
                // https://github.com/webpack-contrib/css-loader
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
            },
            {
                test: /\.less$/,
                use: ['style-loader',
                    'css-loader',
                    'less-loader'],
            },
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    plugins : [HTMLWebpackPluginConfig]
};
