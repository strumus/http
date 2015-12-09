'use strict';

var path = require('path'),
	webpack = require('webpack');

console.log(path.join(__dirname, 'public'));

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
		preLoaders: [
			{ test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/ }
		],
		loaders: [
			{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.css$/, loader: 'style-loader!css-loader', exclude: /node_modules/ }
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};