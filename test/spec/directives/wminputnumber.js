/*jslint indent:2*/
/*global describe, beforeEach, module, inject, it, angular, expect*/

(function () {
  
  'use strict';
  
  describe('Directive: wmInputNumber', function () {
  
    // load the directive's module
    beforeEach(module('widmarkAppApp'));
  
    var element,
      scope;
  
    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));
  
    it('should make hidden element visible', inject(function ($compile) {
      element = angular.element('<wm-input-number></wm-input-number>');
      element = $compile(element)(scope);
      expect(element.text()).toBe('this is the wmInputNumber directive');
    }));
  });
}());
