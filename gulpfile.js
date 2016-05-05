
'use strict';

/**
 * Module dependencies
 */
var gulp = require('gulp'),
    gutil = require('gulp-util'), 
    path = require('path'), // get file path
    del = require('del'), // delete files or floders
    open = require('open'), // open url
    argv = require('minimist')(process.argv.slice(2)),
    shell = require('gulp-shell'), // execute shell command 
    gulpNgConfig = require('gulp-ng-config'),
    springDebug = require('gulp-strip-debug'), // remove all 'console,alert etc' lines.
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConfig = null,
    isApp =  argv.app && !argv.web ? true : false , // option --app
    isWeb = argv.web && !argv.app ? true : false, // option --web
    isDev = argv.dev && !argv.prod ? true : false, // option --dev
    isProd = argv.prod && !argv.dev ? true : false, // option --prod
    isIos = argv.ios && !argv.andorid ? true : false, // option --ios
    isAndroid = argv.andorid && !argv.ios ? true : false; // option --andorid

if(isApp){
  webpackConfig = require('./app/webpack.app.config.js');
  console.log('command start with --> app mode ...');

}else if(isWeb){
  webpackConfig = require('./web/webpack.web.config.js');
  console.log('command start with --> web mode ...');
}
if(isProd){
  console.log('command start wtih --> production mode ...');

}else{
  console.log('command start with --> developement mode ...');
}
gulp.task('run',function(){
  if(isIos){
    shell.task([
      'sudo ionic build ios',
      'sudo ionic run ios'
    ])
  }else if(isAndroid){
    shell.task([
      'sudo ionic build android',
      'sudo ionic run android'
    ])
  }
});
gulp.task('watch',function(){
  var appWatchCfg = {
        port : 8080,
        path : {
            prod : 'app/www',
            dev : 'app/src'
        }
      },
      webWatchCfg = {
        port : 9090,
        path : {
            prod : 'web/www',
            dev : 'web/src'
        }
      },
      FinCfg = {};

  if(isApp){
    FinCfg = appWatchCfg;
  }else if(isWeb){
    FinCfg = webWatchCfg;
  }    

  webpackConfig.entry.index
                   .unshift('webpack-dev-server/client?http://localhost:'+FinCfg.port+'/');

  new WebpackDevServer(webpack(webpackConfig), {
    contentBase: path.join(__dirname,FinCfg.path.prod),
    stats: {
      colors: true
    }
  }).listen(FinCfg.port, 'localhost', function (err) {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    // var startUrl = 'http://localhost:8080/webpack-dev-server/index.html';
    var startUrl = 'http://localhost:'+FinCfg.port+'/index.html'
    open(startUrl);
    gutil.log('[webpack-dev-server]', startUrl);

  });
});
gulp.task('webpack',function(callback){
  if(isProd){
      webpackConfig.plugins = webpackConfig
      .plugins.concat(
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            output: {comments: false},
            compress : { warnings : false},
            mangle: false, //不混淆变量名
            preserveComments: false, // 删除所有注释
        })
      );
    webpackConfig.devtool = false;
    webpackConfig.debug = false;
  }
  webpack(webpackConfig, function (err, stats) {
    if (err) {
      throw new gutil.PluginError('webpack', err);
    }

    gutil.log('[webpack]', stats.toString({
      colors: true
    }));

    callback();
  });
});
gulp.task('clean',function(){
  if(argv.app && !argv.web){
    del([
      'app/www/**/*',
    ], {
      dot: true
    });
  }else if(!argv.app && argv.web){
    del([
      'web/www/**/*',
    ], {
      dot: true
    });
  }
});
gulp.task('server',function(){
  var base_url = 'http://localhost:3000/';
  if(argv.remote){
    base_url = 'http://www.baidu.com'
  }
  console.log('--------------');
  if(argv.p === 'app'){
    console.log('opeurl --> ' +base_url+'app');
    open(base_url+'app');
    return;
  }else if(argv.p === 'web'){
    console.log('opeurl --> '+base_url);
    open(base_url);
    return;
  }
  console.log('opeurl --> '+base_url);
  console.log('opeurl --> ' +base_url+'app');
  open(base_url);
  open(base_url+'app');
  
});




