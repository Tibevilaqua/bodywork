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

                user.nameError = null;
                user.surnameError = null;
                user.genderError = null;
                user.birthDateError = null;
                user.emailError = null;
                user.passwordError = null;

            },


        };
    }

})();


