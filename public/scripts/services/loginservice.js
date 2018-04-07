'use strict';

/**
 * @ngdoc service
 * @name kakesSampleApp.loginService
 * @description
 * # loginService
 * Service in the kakesSampleApp.
 */
angular.module('kakesSampleApp')
  .service('loginService', LoginService);

  LoginService.$inject = ['$http', '$q', 'dataConstants'];

  function LoginService($http, $q, dataConstants) {
      // AngularJS will instantiate a singleton by calling "new" on this function
      var loginServiceVm = {
      	authenticate : authenticate
      };


      function authenticate() {
      	var deferred = $q.defer();

      	$http.get(dataConstants.testUrl)
      	.then(function(response){
      	   deferred.resolve(response.data);
      	})
      	.catch(function(response){
      	  deferred.reject(response);
      	});

      	return deferred.promise;
      }

      return loginServiceVm;
    }
