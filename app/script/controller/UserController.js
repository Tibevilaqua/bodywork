(function(){
    'use strict';

    var app = angular.module('myApp');



// Home controller
    app.controller('UserCtrl',['$scope', '$window','UserService',loadController]);


    function loadController($scope,$window,UserService) {

        $scope.submitForm = function() {


            UserService.saveUser($scope.user)
                .then(function (result) {
                    
                    $scope.userSavedSuccessfully = "Well done dear " + $scope.user.name + ". Your register was created successfully.";
                    $scope.user = null;

                    setTimeout(function() {
                        $window.location.href = '/#/home';
                    }, 4000);

                }).catch(function(result){
                    console.log(result + "Error");
            });;



        }
    }
})();
