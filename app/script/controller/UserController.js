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


                //Error fields - messages
                var nameError = ErrorUtils.getErrorByField("name",result);
                $scope.user.nameError = nameError.name;
                $scope.user.nameErrorMessage = nameError.message;


                var surnameError = ErrorUtils.getErrorByField("surname",result);
                $scope.user.surnameError = surnameError.name;
                $scope.user.surnameErrorMessage = surnameError.message;

                var genderError = ErrorUtils.getErrorByField("gender",result);
                $scope.user.genderError = genderError.name;
                $scope.user.genderErrorMessage = genderError.message;

                var birthDateError = ErrorUtils.getErrorByField("birthDate",result);
                $scope.user.birthDateError = birthDateError.name;
                $scope.user.birthDateErrorMessage = birthDateError.message;

                var emailError = ErrorUtils.getErrorByField("email",result);
                $scope.user.emailError = emailError.name;
                $scope.user.emailErrorMessage = emailError.message;

                var passwordError = ErrorUtils.getErrorByField("password",result);
                $scope.user.passwordError = passwordError.name;
                $scope.user.passwordErrorMessage = passwordError.message;

            });



        }
    }
})();
