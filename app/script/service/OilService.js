(function(){
    'use strict';

var app = angular.module('myApp');
    

    app.factory('OilService', ['$http','$q', function ($http,$q) {
        var self = this;
        self.getOilList = function () {
            var deferred = $q.defer();

            $http.get('http://localhost:8080/oil/?name=A')
                .then(function(response) {
                    deferred.resolve(response.data);
                return;
            });
            
            return deferred.promise;
        };

        return {

            getOilList: function () {
                return self.getOilList();
            }
        };

    }]);
})();
