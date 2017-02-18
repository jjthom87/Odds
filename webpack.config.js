var webpack = require('webpack');
var path = require('path');

module.exports = {
	entry: [
		'./client/app/app.jsx'
	],
	externals: {
	},
	plugins: [
	],
	output: {
		path: __dirname,
		filename: './client/public/bundle.js'
	},
	resolve: {
		root: __dirname,
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0']
				},
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	sassLoader: {
		includePaths: [
		]
	},
	devtool: 'inline-source-map'
};