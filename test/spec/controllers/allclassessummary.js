'use strict';

describe('Controller: AllclassessummaryCtrl', function () {

  // load the controller's module
  beforeEach(module('kakesSampleApp'));

  var AllclassessummaryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllclassessummaryCtrl = $controller('AllclassessummaryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AllclassessummaryCtrl.awesomeThings.length).toBe(3);
  });
});
