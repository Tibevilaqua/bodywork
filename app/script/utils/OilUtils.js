(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('OilUtils', [ loadUtils]);

    /*jshint latedef: false */
    function loadUtils() {
        /*jshint latedef: true */

        return {

            removeOilValuesFromSession: function (oil) {

                oil.name = null;
                oil.type = null;
                oil.description = null;
                oil.image = null;

            },

            removeOilBlankValuesFromSession: function (oil) {

                oil.name = oil.name == '' ? undefined : oil.name;
                oil.type = oil.type == '' ? undefined : oil.type;
                oil.description = oil.description == '' ? undefined : oil.description;
                oil.image = oil.image == '' ? undefined : oil.image;

            }
            ,removeOilMessageValuesFromSession: function (oil) {

                oil.nameError = undefined;
                oil.nameErrorMessage = undefined;
                oil.typeError = undefined;
                oil.typeErrorMessage = undefined;
                oil.descriptionError = undefined;
                oil.descriptionErrorMessage = undefined;
                oil.imageError = undefined;
                oil.imageErrorMessage = undefined;
            }
        };
    }

})();


