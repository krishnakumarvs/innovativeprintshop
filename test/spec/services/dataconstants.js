'use strict';

describe('Service: dataConstants', function () {

  // load the service's module
  beforeEach(module('kakesSampleApp'));

  // instantiate service
  var dataConstants;
  beforeEach(inject(function (_dataConstants_) {
    dataConstants = _dataConstants_;
  }));

  it('should do something', function () {
    expect(!!dataConstants).toBe(true);
  });

});
