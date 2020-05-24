// var webpack = require('webpack');
// var path = require('path');
//const MomentLocalesPlugin = require('moment-locales-webpack-plugin');
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [{
    mode: 'development',
    target: 'web',
    entry: {
        client: './src/client.js'
    },
    // output: {
    //     path: __dirname + '/public',
    //     filename: '[name].js'
    // },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            // {
            //     test: /\.css$/,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader']
            // }
        ]
    },
    // devtool: 'eval-cheap-module-source-map',
    // plugins: [
    //     new MiniCssExtractPlugin(),
    //     // To strip all locales except “en”
    //     new MomentLocalesPlugin(),
    //
    //     // Or: To strip all locales except “en”, “es-us” and “ru”
    //     // (“en” is built into Moment and can’t be removed)
    //     new MomentLocalesPlugin({
    //         localesToKeep: ['en'],
    //     }),
    // ],
}];