/*jslint indent:2*/
/*global describe, beforeEach, module, inject, it, angular, expect*/

(function () {

  'use strict';

  describe('Directive: wmTime', function () {

    // load the directive's module
    beforeEach(module('widmarkApp'));

    var element,
      scope;

    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
      element = angular.element('<wm-time></wm-time>');
      element = $compile(element)(scope);
      expect(element.text()).toBe('this is the wmTime directive');
    }));
  });
}());