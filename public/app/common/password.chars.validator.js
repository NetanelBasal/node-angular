(function() {
  'use strict'

  angular.module('password.chars.validator', [])
    .directive('passwordCharsValidator', passwordCharsValidator);

  // @ngInject
  function passwordCharsValidator() {
    return {
      restrict: 'A',
      link    : link,
      require : 'ngModel'
    }
    function link( $scope, elem, attrs , ngModelController) {

      var REQUIRED_PATTERNS = [
        /\d+/,    //numeric values
        /[a-z]+/, //lowercase values
        /[A-Z]+/, //uppercase values
        /\W+/,    //special characters
        /^\S+$/   //no whitespace allowed
      ];

      ngModelController.$validators.passwordCharacters = function( value ) {
        var status = true;
        angular.forEach(REQUIRED_PATTERNS, function( pattern ) {
          status = status && pattern.test(value);
        });
        return status;
      };
    }
  }

})();
