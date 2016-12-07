'use strict';

angular.module('myApp', ['ngRoute'])

    // Declared route
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'html/home.html',
            controller: 'HomeCtrl'
        });
    }])

    // Home controller
        .controller('HomeCtrl',['$scope','$http',loadController]);


function loadController($scope, $http) {

        $http.get('http://localhost:8080/oil/?name=B%20d')
            .then(function(response) {
        $scope.oil = response.data;
                console.log(response);
    });


};