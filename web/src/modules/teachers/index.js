
  'use strict';
require('./controller.js');

  // Aqui eu seto o modulo principal, suas dependencias internas e suas rotas
module.exports =  angular.module('theacher')
  .config(function($stateProvider) {
    $stateProvider
    .state('theacher',{
      abstract : true,
      url : '/theacher',
      template : '<ui-view/>'
    })
    .state('theacher.list',{
      url : '',
      template : require('./views/list.html')
    })
    .state('theacher.edit',{
      url : '/:theacherId/edit',
      template : require('./views/edit.html')
    })
    .state('theacher.create',{
      url : '/create',
      template : require('./views/edit.html')
    })
    .state('theacher.view',{
      url : '/:theacherId',
      template : require('./views/view.html')
    });

