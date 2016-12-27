(function(){
    'use strict';

    var app = angular.module('myApp');



// Home controller
    app.controller('UserCtrl',['$scope', '$window','UserService','UserUtils','ErrorUtils',loadController]);


    function loadController($scope,$window,UserService,UserUtils,ErrorUtils) {

        $scope.submitForm = function() {

           UserUtils.removeUserMessageValuesFromSession($scope.user);

            UserService.saveUser($scope.user)
                .then(function () {

                    var userName = $scope.user.name;

                    $scope.user.savedSuccessfully = "Well done dear " + userName + ". Your register was created successfully.";

                    UserUtils.removeUserValuesFromSession($scope.user);

                    setTimeout(function() {
                        $window.location.href = '/#/home';
                    }, 4000);

                }).catch(function(result){

                //Error messages
                $scope.user.nameError = ErrorUtils.isFieldContained("name",result) ? true : undefined;
                $scope.user.surnameError = ErrorUtils.isFieldContained("surname",result) ? true : undefined;
                $scope.user.genderError = ErrorUtils.isFieldContained("gender",result) ? true : undefined;
                $scope.user.birthDateError = ErrorUtils.isFieldContained("birthDate",result) ? true : undefined;

            });



        }
    }
})();
