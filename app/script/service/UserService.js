(function(){
    'use strict';

    var app = angular.module('myApp');


    app.factory('UserService', ['$http','$q', function ($http,$q) {
        var self = this;
        self.saveUser = function (user) {
            var deferred = $q.defer();

            $http.post('http://localhost:8080/user', user)
                .success(function () {
                   deferred.resolve();
                })
                .error(function (result) {
                    deferred.reject(result);

                });
            return deferred.promise;
        };

        return {

            saveUser: function (user) {
                return self.saveUser(user);
            }
        };

    }]);
})();
