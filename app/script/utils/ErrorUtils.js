(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('ErrorUtils', [ loadUtils]);

    /*jshint latedef: false */
    function loadUtils() {
        /*jshint latedef: true */

        return {

            getErrorByField: function (field, error) {

                for(var i = 0; i < error.length; i++){
                    var fieldWithError = error[i].name;
                    if(fieldWithError == field){
                        return error[i];
                    }
                }
                return {name:null, message:null};
            }
        };
    }

})();


