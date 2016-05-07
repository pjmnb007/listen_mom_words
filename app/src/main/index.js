
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
    require('../components/controllers').name,
    require('../services/services').name,
  ])
  // .config(function($ionicConfigProvider) {
  //   // console.log($ionicConfigProvider);
  //   // $ionicConfigProvider.scrolling.jsScrolling(false);
  //   $ionicConfigProvider.views.forwardCache(10);
  //   $ionicConfigProvider.tabs.style('standard'); 
  //   $ionicConfigProvider.tabs.position('bottom');
  //   $ionicConfigProvider.navBar.alignTitle('center'); 

  //   $ionicConfigProvider.backButton.text(false).previousTitleText(false);
  //   $ionicConfigProvider.backButton.icon('ion-ios-arrow-left');

  //   $ionicConfigProvider.platform.ios.views.transition('ios'); 
  //   $ionicConfigProvider.platform.android.views.transition('android');
  // })
  .constant('version', version)

  //.constant('config', require('./config'))

  // .config(function ($compileProvider) {
  //   $compileProvider.aHrefSanitizationWhitelist(
  //     /^\s*(https?|ftp|mailto|file|tel):/);
  // })

  .config( require('./appRouter') )

  // .run(function ($ionicPlatform,$log, $rootScope, $ionicBackdrop, $timeout) {
	 //  $ionicPlatform.ready(function() {
	 //    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
	 //    // for form inputs)
	 //    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
	 //      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
	 //      cordova.plugins.Keyboard.disableScroll(true);

	 //    }
	 //    if (window.StatusBar) {
	 //      // org.apache.cordova.statusbar required
	 //      StatusBar.styleDefault();
	 //    }
	 //  });
  // })

  //   $log.debug('app module - run');

  //   $rootScope.$on('$stateChangeStart',
  //     function (event, toState) {
  //       $log.debug('$stateChangeStart - name:', toState.name);
  //     });

  //   $rootScope.$on('$stateChangeSuccess',
  //     function (event, toState) {
  //       $log.debug('$stateChangeSuccess - name:', toState.name);
  //     });

  //   $rootScope.$on('$stateNotFound',
  //     function (event, unfoundState, fromState, fromParams) {
  //       $log.warn('$stateNotFound', {
  //         event        : event,
  //         unfoundState : unfoundState,
  //         fromState    : fromState,
  //         fromParams   : fromParams
  //       });
  //     });

  //   $rootScope.$on('$stateChangeError',
  //     function (event, toState, toParams, fromState, fromParams, error) {
  //       $log.error('$stateChangeError', {
  //         event      : event,
  //         toState    : toState,
  //         toParams   : toParams,
  //         fromState  : fromState,
  //         fromParams : fromParams,
  //         error      : error
  //       });
  //       if (error) {
  //         throw error;
  //       }
  //     });

  //   $ionicBackdrop.retain();

  //   $timeout(function() {
  //     $ionicBackdrop.release();
  //   }, 600);
  // })
  ;

// Add the styles to the page
require('./index.scss');

// Bootstrap App Module
libsModule.ionicBootstrap(appModule);



