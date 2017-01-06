(function(){
    'use strict';

var app = angular.module('myApp');



// Home controller
app.controller('OilCtrl',['$scope','OilService','OilUtils','ErrorUtils',loadController]);


function loadController($scope,OilService,OilUtils,ErrorUtils) {

    $scope.oil = new Object();

        $scope.loadOil = function() {

        OilService.getOilList()
            .then(function (result) {
                $scope.oil = result;
            });
    };

    $scope.submitForm = function() {

        OilUtils.removeOilMessageValuesFromSession($scope.oil);
        OilUtils.removeOilBlankValuesFromSession($scope.oil);
        
        OilService.saveOil($scope.oil)
            .then(function () {
                
                $scope.oil.savedSuccessfully = "Oil registered successfully";

                OilUtils.removeOilValuesFromSession($scope.oil);

            }).catch(function(result){

            //Error fields - messages
            var nameError = ErrorUtils.getErrorByField("name",result);
            $scope.oil.nameError = nameError.name;
            $scope.oil.nameErrorMessage = nameError.message;
            
            var typeError = ErrorUtils.getErrorByField("type",result);
            $scope.oil.typeError = typeError.name;
            $scope.oil.typeErrorMessage = typeError.message;
            
            
            var descriptionError = ErrorUtils.getErrorByField("description",result);
            $scope.oil.descriptionError = descriptionError.name;
            $scope.oil.descriptionErrorMessage = descriptionError.message;
            
            
            var imageError = ErrorUtils.getErrorByField("image",result);
            $scope.oil.imageError = imageError.name;
            $scope.oil.imageErrorMessage = imageError.message;
            
        });
    };

    $scope.onFileSelect = function(files) {
         $scope.oil.image = files[0];
    };
    

    }
})();
