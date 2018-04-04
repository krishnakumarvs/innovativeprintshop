'use strict';

/**
 * @ngdoc function
 * @name kakesSampleApp.controller:DashboardsubCtrl
 * @description
 * # DashboardsubCtrl
 * Controller of the kakesSampleApp
 */
angular.module('kakesSampleApp')
  .controller('DashboardsubCtrl', DashboardsubCtrl);

  DashboardsubCtrl.$inject = ['$scope', '$location'];


  function DashboardsubCtrl ($scope, $location) {
  	this.data = {
  		name: "A",
  		userName: "lkg-a",
  		teacherName: "Pushpa latha",
  		studentsCount: 15,
  		password: "123",
      studentName: "-",
      emergencyNumber : "-",
      studentDob: "-",
      validUntilDate : "-"
  	};
  	this.users = [];
  	var self = this;
  	this.selectedIndex = 0;
    this.selectedUser = {};
    this.checkUserFieldEnteredCompletely = checkUserFieldEnteredCompletely;
    this.goToPreviewIDCardsForPritingPage = goToPreviewIDCardsForPritingPage;


    var requiredFields = ["studentName" , "emergencyNumber" , "studentDob" , "validUntilDate"];

  	this.userSelected = userSelected;

        function User() {
          this.studentName = "-";
          this.emergencyNumber  = "-";
          this.studentDob = "-";
          this.validUntilDate  = "-";
        }

        this.users = [{
        	studentName : "Rahul",
        	emergencyNumber: "",
        	studentDob: "June 28",
        	validUntilDate : "April 2010",
        },{
          studentName : "Thomas",
          emergencyNumber: "7887788778",
          studentDob: "March 2",
          validUntilDate : "April 2010",
        } ];

        activate();

        function activate () {
        	self.users.length = self.data.studentsCount;
        }

        function goToPreviewIDCardsForPritingPage () {
          $location.url("/previewIdClassBased");
        }

        function userSelected (index) {
        	self.selectedIndex = index;
        }

        function checkUserFieldEnteredCompletely(user) {
          console.log("User " , user);
          var allFeildsComplted = true;
          if(user) {
            for (var i = 0; i < requiredFields.length; i++) {
              if(!user[requiredFields[i]]) {
                allFeildsComplted = false;
              }
            };
          } else {
            allFeildsComplted = false;
          }

          return allFeildsComplted;
        }

        $scope.myImage='';
        $scope.myCroppedImage='';

       var handleFileSelect=function(evt) {
        console.log("Hanlde file triggered");

         var file=evt.currentTarget.files[0];
         var reader = new FileReader();
         reader.onload = function (evt) {
          console.log("onload complete")
          /*$scope.myImage=evt.target.result;*/
           $scope.$apply(function($scope){
             $scope.myImage=evt.target.result;
           });
         };
         reader.readAsDataURL(file);
       };
       angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);
  }
