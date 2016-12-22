(function(){
    'use strict';

var app = angular.module('myApp');



// Home controller
app.controller('HomeCtrl',['$scope','OilService',loadController]);


function loadController($scope,OilService) {
    $scope.oil = null;

        OilService.getOilList()
            .then(function (result) {
            $scope.oil = result;
        })

}
})();
