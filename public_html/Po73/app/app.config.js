angular.module('punto73').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('index73', {
      url: '/',
      controller: 'LogController',
      templateUrl: 'app/template/index.html',
      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load('app/controller/indexController.js');
          }]
      }
    });
    $urlRouterProvider.otherwise('/');
  }]);