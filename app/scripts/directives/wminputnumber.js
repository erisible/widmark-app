/*jslint indent:2*/
/*global angular*/

(function () {

  'use strict';

  angular.module('widmarkApp')
    .directive('wmInputNumber', function () {
      return {
        restrict: 'E',
        replace: true,
        require: '?^ngModel',
        transclude: true,
        templateUrl: 'templates/wminputnumber.html',
        scope: {
          model: '=ngModel'
        },
        link: function (scope, element, attrs, ngModel) {
          
          function getNumber() {
            return parseInt(scope.model, 10);
          }
          
          function getAttr(option) {
            return angular.isDefined(attrs[option]) ? parseInt(attrs[option], 10) : undefined;
          }
                
          function formatValue(value) {
            if (angular.isDefined(attrs.wmLength)) {
              var diff = attrs.wmLength - value.toString().length,
                pre = '',
                i;
              
              for (i = 0; i < diff; i += 1) {
                pre += '0';
              }
              
              return pre + value;
            } else {
              return value;
            }
          }
          
          scope.incrementValue = function () {
            if ((getNumber() < getAttr('wmMax')) || !angular.isDefined(attrs.wmMax)) {
              scope.model = formatValue(getNumber() + 1);
            } else if (angular.isDefined(attrs.wmMin)) {
              scope.model = formatValue(getAttr('wmMin'));
            }
          };
          
          scope.decrementValue = function () {
            if ((getNumber() > getAttr('wmMin')) || !angular.isDefined(attrs.wmMin)) {
              scope.model = formatValue(getNumber() - 1);
            } else if (angular.isDefined(attrs.wmMax)) {
              scope.model = formatValue(getAttr('wmMax'));
            }
          };
          
          var input = element.find('input'),
            isScrollingUp = function (e) {
              if (e.originalEvent) {
                e = e.originalEvent;
              }
            //pick correct delta variable depending on event
              var delta = e.wheelDelta || -e.deltaY;
              return (e.detail || delta > 0);
            };
          
          input.bind('mousewheel wheel', function (e) {
            scope.$apply((isScrollingUp(e)) ? scope.incrementValue() : scope.decrementValue());
            e.preventDefault();
          });
          
          scope.updateValue = function () {
            scope.model = getNumber();
          };
          
          scope.isValid = function () {
            var valid = true;
            
            if (angular.isDefined(attrs.wmMin)) {
              valid = getNumber() >= getAttr('wmMin');
            }
            
            if (angular.isDefined(attrs.wmMax) && valid) {
              valid = getNumber() <= getAttr('wmMax');
            }

            return valid;
          };

          ngModel.$render = function () {
            scope.model = formatValue(ngModel.$viewValue);
            ngModel.$setValidity('model', scope.isValid());
          };
        }
      };
    });
}());