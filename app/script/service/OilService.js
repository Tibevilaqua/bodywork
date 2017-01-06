(function(){
    'use strict';

var app = angular.module('myApp');
    

    app.factory('OilService', ['$http','$q', function ($http,$q) {
        var self = this;
        self.getOilList = function () {
            var deferred = $q.defer();

            $http.get('http://localhost:8080/oil/?name=My oil 123')
                .then(function(response) {
                    deferred.resolve(response.data);
                return;
            });
            
            return deferred.promise;
        };


        self.saveOil = function (oil) {

            var fd = new FormData();
            fd.append('image', oil.image);

            //sample data
            var data ={
                name :  oil.name,
                type : oil.type,
                description : oil.description
            };

            fd.append("oilDTO", new Blob([JSON.stringify(data)], {
                type: "application/json"
            }));

            var deferred = $q.defer();

            $http.post('http://localhost:8080/oil', fd, {
                withCredentials : false,
                headers : {
                    'Content-Type' : undefined
                },
                transformRequest : angular.identity
            })
                .success(function () {
                    deferred.resolve();
                })
                .error(function (result) {
                    deferred.reject(result.errors);

                });
            return deferred.promise;
        };
        
        return {

            getOilList: function () {
                return self.getOilList();
            },
            saveOil: function (oil) {
                return self.saveOil(oil);
            }
        };

    }]);
})();
