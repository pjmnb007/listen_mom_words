
'use strict';

/**
 * Module dependencies
 */

var libsModule = require('../lib'),
    version = require('../../../package.json').version;
/**
 * Setup App Module
 */
var appModule = module.exports = angular

  .module('app', [
    libsModule.name,
  ])
  .constant('version', version)
  //.constant('config', require('./config'))
  .config( require('./appRouter'))
  .directive('appContainer', function(){
    // Runs during compile
    return {
      restrict: 'C',
      template: require('./appContainer.html'),
      replace: true
    };
  });

// Add the styles to the page
require('Semantic-UI-CSS/semantic.css');
require('./index.scss');

// Bootstrap App Module
libsModule.angualrBootstrap(appModule);



