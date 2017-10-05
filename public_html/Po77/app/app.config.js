angular.module('punto77').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('index77', {
      url: '/',
      controller: 'formularioController',
      templateUrl: 'app/template/index.html',
      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load('app/controller/indexController.js');
          }]
      }
    });
    $urlRouterProvider.otherwise('/');
  }]);