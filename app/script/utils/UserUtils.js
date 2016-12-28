(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('UserUtils', [ loadUtils]);

    /*jshint latedef: false */
    function loadUtils() {
        /*jshint latedef: true */

        return {

            removeUserValuesFromSession: function (user) {

                user.name = null;
                user.surname = null;
                user.gender = null;
                user.birthDate = null;
                user.email = null;
                user.password = null;

            },removeUserMessageValuesFromSession: function (user) {

                user.nameError = undefined;
                user.nameErrorMessage = undefined;
                user.surnameError = undefined;
                user.surnameErrorMessage = undefined;
                user.genderError = undefined;
                user.genderErrorMessage = undefined;
                user.birthDateError = undefined;
                user.birthDateErrorMessage = undefined;
                user.emailError = undefined;
                user.emailErrorMessage = undefined;
                user.passwordError = undefined;
                user.passwordErrorMessage = undefined;

            },


        };
    }

})();


