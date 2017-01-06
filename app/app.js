'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
])
// Declared route
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'html/home.html'
            }).when('/home', {
                templateUrl: 'html/home.html'
            })
            .when('/oilSearch', {
                templateUrl: 'html/oil/oilSearch.html',
                controller: 'OilCtrl',
            }).when('/oilSave', {
            templateUrl: 'html/oil/oilSave.html',
            controller: 'OilCtrl',
            }).when('/signUp', {
                templateUrl: 'html/user.html',
                controller: 'UserCtrl',
            });
    }]);
