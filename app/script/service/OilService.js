(function(){
    'use strict';

    angular.module('myApp')
        .service('OilService', ['$http', function ($http) {

            var self = this;
            self.getOilList = function () {

                $http.get('http://localhost:8080/oil/?name=B d')
                then(function(response) {
                    return response.data;
                });
            };

            return {

                getOilList: function () {
                    return self.list();
                }
            };

        }]);
})();
