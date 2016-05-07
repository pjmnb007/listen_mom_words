'use strict';

/**
 * Module dependencies
 */

// set the public path
var scripts = global.document.getElementsByTagName('script');
var src = scripts[scripts.length - 1].getAttribute('src');
global.__webpack_public_path__ = src.substr(0, src.lastIndexOf('/') + 1);

// Add Angular/Ionic dependencies
require('angular-animate');
require('angular-sanitize');
require('angular-ui-router');
require('Semantic-UI-CSS/semantic.js')

var libsModule = module.exports = angular

  .module('commonLibs', ['ui.router']);

libsModule.angualrBootstrap = function (module) {
  if (!window || !window.document) {
    throw new Error('window and document objects required.');
  }

  function onWindowLoad () {
    angular.element(window.document).ready(function () {
      angular.bootstrap(window.document, [module.name]);
    });
    // remove window load listener
    window.removeEventListener('load', onWindowLoad, false);
  }

  // add window load listener
  window.addEventListener('load', onWindowLoad, false);
};
