'use strict'
var path            = require('path'),
    webpack           = require('webpack'),
    basicConfig = require('../webpack.config.js'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');
basicConfig.module.loaders =
basicConfig.module.loaders.concat(
  {
    test   : /[\/]ionic\.js$/,
    loader : 'exports?ionic'
  },
	{ 
		test: /\.css$/, 
		loader: ExtractTextPlugin.extract('style-loader', 'css-loader') 
	},
	{ 
		test: /\.scss$/, 
		loader: ExtractTextPlugin.extract('style-loader','css-loader!sass-loader') 
	}
);   
basicConfig.entry = {
	['index'] : [path.join(__dirname,'src/main/index')]
};
basicConfig.output = {
	path : path.join(__dirname, 'www'),
  filename : '[name].js',
  chunkFilename : '[chunkhash].js'
};
basicConfig.plugins = basicConfig.plugins.concat(
	new ExtractTextPlugin('[name].css'),
	new HtmlWebpackPlugin({
			pkg : require('../package.json'),
			css : '[name].css',
      title : 'listen_mom_words_app',
      template : path.join(__dirname,'src/main/entry.html'),
  })
);
module.exports = basicConfig;