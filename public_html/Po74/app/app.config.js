angular.module('punto74').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('index74', {
      url: '/',
      controller: 'indexController',
      templateUrl: 'app/template/index.html',
      resolve: {
        loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load('app/controller/indexController.js');
          }]
      }
    });
    $urlRouterProvider.otherwise('/');
  }]);