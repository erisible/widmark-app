/*jslint indent:2*/
/*global angular*/

(function () {

  'use strict';

  angular.module('widmarkApp')
    .directive('wmInputTime', function () {
      return {
        restrict: 'E',
        require: '?^ngModel',
        replace: true,
        scope: {
          model: '=ngModel'
        },
        templateUrl: 'templates/wminputtime.html'
      };
    });
}());
