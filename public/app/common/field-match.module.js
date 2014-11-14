(function () {
    'use strict'

  //@ngInject
    function fieldMatch($parse) {
      return {
        restrict:'AE',
        require: 'ngModel',
        link: link
      }

      function link($scope, elem, attrs, ctrl) {
        $scope.$watch(function() {
          var valid = $parse(attrs.fieldMatch)($scope) === ctrl.$modelValue;
          ctrl.$setValidity('mismatch', valid);
        });
      }
    }

  angular.module('fieldMatch', [])
      .directive('fieldMatch', fieldMatch);


})();







