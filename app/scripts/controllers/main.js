/*jslint indent:2*/
/*global angular*/
/*global setInterval*/
/*global clearInterval*/

(function () {

  'use strict';

  angular.module('widmarkApp')
    .controller('MainCtrl', ['$scope', 'numberFilter', function ($scope, numberFilter) {
      var date = new Date(new Date().setHours(new Date().getHours() + 5)),
        delay = function () {
          var now = new Date(),
            value = ($scope.time.hours - now.getHours()) + (($scope.time.minutes - now.getMinutes()) / 60);
          
          if (value < 0) {
            value += 24;
          }
          return value;
        },
        intervalUnits;
      
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
        hours: date.getHours(),
        minutes: date.getMinutes()
      };

      $scope.setUserWeight = function (value) {
        $scope.user.weight = value;
      };

      $scope.calculateUnits = function () {
        return (0.017 * delay() + 0.05) * 1.03 * $scope.user.composition * $scope.user.weight || 0;
      };
      
      function updateUnits(newValue) {
        clearInterval(intervalUnits);
        
        intervalUnits = setInterval(function () {
          
          if (numberFilter(newValue, 1) === numberFilter($scope.maximumUnits, 1)) {
            clearInterval(intervalUnits);
          } else {
            
            $scope.$apply($scope.maximumUnits = $scope.maximumUnits > newValue ? Math.abs($scope.maximumUnits - 0.1) : $scope.maximumUnits + 0.1);
          }
        }, 10);
      }
      
      $scope.$watch($scope.calculateUnits, updateUnits);
    }]);
}());