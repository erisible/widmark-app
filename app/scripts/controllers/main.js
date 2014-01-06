/*jslint indent:2*/
/*global angular*/

(function () {

  'use strict';

  angular.module('widmarkApp')
    .controller('MainCtrl', function ($scope) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];

      $scope.user = {
        weight: 20
      };
      $scope.maximumUnits = 0;
      $scope.time = {
        hours: new Date().getHours() + 5,
        minutes: new Date().getMinutes()
      };

      $scope.setUserWeight = function (value) {
        $scope.user.weight = value;
      };

      var delay = function () {
        var now = new Date(),
          value = ($scope.time.hours - now.getHours()) + (($scope.time.minutes - now.getMinutes()) / 60);
        
        if (value < 0) {
          value += 24;
        }
        return value;
      };

      $scope.maximumUnits = function () {
        return (0.017 * delay() + 0.05) * 1.03 * $scope.user.composition * $scope.user.weight || 0;
      };
    });
}());