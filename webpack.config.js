
'use strict';

/**
 * Module dependencies
 */
var path            = require('path'),
    webpack           = require('webpack');

module.exports = {

  cache: true,

  entry: {
    // 'app/www/index': ['./app/src/main/index'],
    // 'web/www/index' : ['./web/src/main/index']
  },

  output: {
    // path          : path.join(__dirname, 'www'),
    // filename      : '[name].js',
    // chunkFilename : '[chunkhash].js'
  },

  module: {

    loaders: [{
    //   test   : /\.css$/,
    //   loader : 'style!css'
    // },
    // {
      test   : /\.html$/,
      loader : 'html'
    }, {
      test   : /\.json$/,
      loader : 'json'
    },
    { 
      test: /\.png$/,
      loader: "url-loader?mimetype=image/png" },
    // {
    //  test   : /\.scss$/,
    //   loader : 'style!css!sass?outputStyle=compressed'
    //   // nested  expanded compact compressed
    // },
    //{
    {  test   : /\.woff/,
      loader : 'url?prefix=font/&limit=10000&mimetype=application/font-woff'
    }, {
      test   : /\.ttf/,
      loader : 'file?prefix=font/'
    }, {
      test   : /\.eot/,
      loader : 'file?prefix=font/'
    }, {
      test   : /\.svg/,
      loader : 'file?prefix=font/'
    },
    {
      test   : /[\/]angular\.js$/,
      loader : 'exports?angular'
    }]
  },
  // noParse:[
  //   './bower_components/angular'
  // ],
  resolve: {
    root: [
      path.join(__dirname, 'app'),
      path.join(__dirname, 'bower_components'),
      path.join(__dirname, 'node_modules'),
    ],
    moduleDirectories: [
      'bower_components',
      'node_modules',
    ],

    alias: {
    }
  },

  plugins: [
    new webpack.ProvidePlugin({
      'angular': 'exports?window.angular!'+path.join(__dirname,'/bower_components/angular'),
    }),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(
        'bower.json', ['main'])
    ),
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        'NODE_ENV': JSON.stringify('production')
      }
    })
   
  ]

};
