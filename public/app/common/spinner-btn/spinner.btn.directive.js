(function() {
  'use strict'

  //@ngInject
  function spinnerBtn() {
    return {
      restrict: 'AE',
      scope   : {
        loading: '='
      },
      compile : function( ele, attr ) {

        var spinner = angular.element( '<i class="fa fa-spinner net-spinner" ng-if="loading"></i>' );

        ele.append( spinner );

        ele.find( 'i' ).css( 'marginLeft', '5px' );

      }
    }

  }

  module.exports = spinnerBtn;
})();







