'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
])
// Declared route
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'html/home.html',
            controller: 'HomeCtrl',
        });
    }]);
