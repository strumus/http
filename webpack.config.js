'use strict';

var path = require('path'),
    webpack = require('webpack');

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        './src/index.jsx'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.scss$/, loaders: ["style", "css", "autoprefixer", "sass"]},
            {test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader', exclude: /node_modules/}
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./src/styles")]
    }
};