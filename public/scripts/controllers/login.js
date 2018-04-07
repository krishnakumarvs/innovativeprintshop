'use strict';

/**
 * @ngdoc function
 * @name kakesSampleApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the kakesSampleApp
 */
angular.module('kakesSampleApp')
  .controller('LoginCtrl', LoginCtrl);


  LoginCtrl.$inject = ['loginService', '$location'];

  function LoginCtrl (loginService, $location) {
      this.userName = "kakes";
      this.password = "123";

      this.authenticate = authenticate;

      function authenticate() {
      	loginService.authenticate().then(function(data) {
      		console.log(data);
      		$location.url('/dashboardMain');
      	}).catch(function(err) {
      		console.log("err ", err);
      	});
      }
    }
