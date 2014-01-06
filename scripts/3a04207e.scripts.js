!function(){"use strict";angular.module("widmarkApp",[])}(),function(){"use strict";angular.module("widmarkApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.user={weight:20},a.maximumUnits=0,a.time={hours:(new Date).getHours()+5,minutes:(new Date).getMinutes()},a.setUserWeight=function(b){a.user.weight=b};var b=function(){var b=new Date,c=a.time.hours-b.getHours()+(a.time.minutes-b.getMinutes())/60;return 0>c&&(c+=24),c};a.maximumUnits=function(){return 1.03*(.017*b()+.05)*a.user.composition*a.user.weight||0}}])}(),function(){"use strict";angular.module("widmarkApp").directive("wmInputNumber",function(){return{restrict:"E",replace:!0,require:"?^ngModel",transclude:!0,templateUrl:"templates/wminputnumber.html",scope:{model:"=ngModel"},link:function(a,b,c,d){function e(){return parseInt(a.model,10)}function f(a){return angular.isDefined(c[a])?parseInt(c[a],10):void 0}function g(a){if(angular.isDefined(c.wmLength)){var b,d=c.wmLength-a.toString().length,e="";for(b=0;d>b;b+=1)e+="0";return e+a}return a}a.incrementValue=function(){e()<f("wmMax")||!angular.isDefined(c.wmMax)?a.model=g(e()+1):angular.isDefined(c.wmMin)&&(a.model=g(f("wmMin")))},a.decrementValue=function(){e()>f("wmMin")||!angular.isDefined(c.wmMin)?a.model=g(e()-1):angular.isDefined(c.wmMax)&&(a.model=g(f("wmMax")))};var h=b.find("input"),i=function(a){a.originalEvent&&(a=a.originalEvent);var b=a.wheelDelta||-a.deltaY;return a.detail||b>0};h.bind("mousewheel wheel",function(b){a.$apply(i(b)?a.incrementValue():a.decrementValue()),b.preventDefault()}),a.updateValue=function(){a.model=e()},a.isValid=function(){var a=!0;return angular.isDefined(c.wmMin)&&(a=e()>=f("wmMin")),angular.isDefined(c.wmMax)&&a&&(a=e()<=f("wmMax")),a},d.$render=function(){a.model=g(d.$viewValue),d.$setValidity("model",a.isValid())}}}})}(),function(){"use strict";angular.module("widmarkApp").directive("wmInputTime",function(){return{restrict:"E",require:"?^ngModel",replace:!0,scope:{model:"=ngModel"},templateUrl:"templates/wminputtime.html"}})}();