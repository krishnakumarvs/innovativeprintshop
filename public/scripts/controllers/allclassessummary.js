'use strict';

/**
 * @ngdoc function
 * @name kakesSampleApp.controller:AllclassessummaryCtrl
 * @description
 * # AllclassessummaryCtrl
 * Controller of the kakesSampleApp
 */
angular.module('kakesSampleApp')
  .controller('AllclassessummaryCtrl', AllclassessummaryCtrl);

  AllclassessummaryCtrl.$inject = ['$location'];

  function AllclassessummaryCtrl($location) {
  	this.goToPreviewIdClassBased = goToPreviewIdClassBased;

  	function goToPreviewIdClassBased () {
  		console.log("goToPreviewIdClassBased");
  		$location.url('/previewIdClassBased?usr=principal');
  	}
  }


