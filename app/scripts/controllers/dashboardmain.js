'use strict';

/**
 * @ngdoc function
 * @name kakesSampleApp.controller:DashboardmainCtrl
 * @description
 * # DashboardmainCtrl
 * Controller of the kakesSampleApp
 */
angular.module('kakesSampleApp')
  .controller('DashboardmainCtrl', DashboardmainCtrl);


  DashboardmainCtrl.$inject = ['loginService', '$location'];

  function DashboardmainCtrl () {
  	console.log("DashboardmainCtrl");
    this.selectedClass = {};
    this.selectedDivision = {};

  	this.data = {
  		collegeName: "St. Lords college",
  		classes: [{
  			name : "lkg",
  			divisions: [{
          name: "A",
          userName: "lkg-a",
          teacherName: "Pushpa latha",
          studentsCount: 12,
          password: "123"
        }, {
          name: "B",
        }]
  		},{
  			name : "ukg",
  			divisions: []
  		}, {
  			name : "1",
  			divisions: []
  		} ]
  	};

  	this.openAddNewClass = openAddNewClass;
    this.openAddNewDivision = openAddNewDivision;
  	this.addNewClass = addNewClass;
    this.addNewDivision = addNewDivision;

  	function NewClass () {
  		this.name = "";
  		this.divisions = [];
  	}

    function NewDivision () {
      this.name = "";
      this.userName = "";
      this.teacherName = "";
      this.studentsCount = "";
      this.password = "";
    }

  	this.newClass = new NewClass();
    this.newDivision = new NewDivision();

    function openAddNewDivision() {
      this.newDivision = new NewDivision();
      $("#addNewDivisionModal").modal();
    }

  	function openAddNewClass() {
  		this.newClass = new NewClass();
  		$("#addNewClassModal").modal();
  	}


    function addNewDivision () {
      if(this.newDivision && this.newDivision.name && this.newDivision.name.trim()) {
        $('#addNewDivisionModal').modal('hide');
        this.newDivision.userName = (this.selectedClass.name + "-" + this.newDivision.name).toLowerCase();
        this.selectedClass.divisions.push(this.newDivision);
        this.selectedDivision = this.newDivision;
        this.newDivision = new NewDivision();
      }
    }

  	function addNewClass() {
  		console.log(this.newClass);

      if(this.newClass && this.newClass.name && this.newClass.name.trim()) {
        $('#addNewClassModal').modal('hide');
        this.data.classes.push(this.newClass);
        this.selectedClass = this.newClass;
        this.newClass = new NewClass();
      }
  	}




  }
