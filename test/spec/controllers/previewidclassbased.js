'use strict';

describe('Controller: PreviewidclassbasedCtrl', function () {

  // load the controller's module
  beforeEach(module('kakesSampleApp'));

  var PreviewidclassbasedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PreviewidclassbasedCtrl = $controller('PreviewidclassbasedCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PreviewidclassbasedCtrl.awesomeThings.length).toBe(3);
  });
});
