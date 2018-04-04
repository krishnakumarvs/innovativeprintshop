'use strict';

describe('Controller: DashboardmainCtrl', function () {

  // load the controller's module
  beforeEach(module('kakesSampleApp'));

  var DashboardmainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashboardmainCtrl = $controller('DashboardmainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DashboardmainCtrl.awesomeThings.length).toBe(3);
  });
});
