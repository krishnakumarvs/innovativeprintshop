'use strict';

describe('Controller: DashboardsubCtrl', function () {

  // load the controller's module
  beforeEach(module('kakesSampleApp'));

  var DashboardsubCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashboardsubCtrl = $controller('DashboardsubCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DashboardsubCtrl.awesomeThings.length).toBe(3);
  });
});
