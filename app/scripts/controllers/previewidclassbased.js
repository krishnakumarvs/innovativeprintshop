'use strict';

/**
 * @ngdoc function
 * @name kakesSampleApp.controller:PreviewidclassbasedCtrl
 * @description
 * # PreviewidclassbasedCtrl
 * Controller of the kakesSampleApp
 */
angular.module('kakesSampleApp')
  .controller('PreviewidclassbasedCtrl', PreviewidclassbasedCtrl);

  PreviewidclassbasedCtrl.$inject = ['$location' ,'toastr', '$scope'];

  function PreviewidclassbasedCtrl ($location, toastr, $scope) {

    var self = this;
    this.displaySubmitForPrintButton = false;
  	this.goBack = goBack;
  	this.openConfirmForprintModel = openConfirmForprintModel;
  	this.submitIdCardsForPrinting = submitIdCardsForPrinting;

    activate();

    function activate() {
      if($location.search().usr && $location.search().usr == "principal") {
        self.displaySubmitForPrintButton = true;
      }
    }

  	function goBack() {
  		window.history.back();
  	}

  	function submitIdCardsForPrinting() {
  		toastr.success('Success!', 'Id cards are submitted for printing');
  		$('#confirmForPrintingModal').modal('hide');
  		$('body').removeClass('modal-open');
  		$('.modal-backdrop').remove();

  		setTimeout(function() {
  			window.history.back();
  			//$location.url('/allClassesSummary');
  		}, 500);
  	}

  	function openConfirmForprintModel() {
  		$("#confirmForPrintingModal").modal();
  	}

  	this.studentDetails = [{
        	studentName : "Rahul",
        	emergencyNumber: "",
        	studentDob: "June 28",
        	validUntilDate : "April 2010",
        }, {
          studentName : "Thomas",
          emergencyNumber: "7887788778",
          studentDob: "March 2",
          validUntilDate : "April 2010",
        }, {
          studentName : "Thomas",
          emergencyNumber: "7887788778",
          studentDob: "March 2",
          validUntilDate : "April 2010",
        }, {
          studentName : "Thomas",
          emergencyNumber: "7887788778",
          studentDob: "March 2",
          validUntilDate : "April 2010",
        }, {
          studentName : "Thomas",
          emergencyNumber: "7887788778",
          studentDob: "March 2",
          validUntilDate : "April 2010",
        }];
  }
