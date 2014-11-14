/**
 * example
 *<table class="table table-hover" sort-table>
 <th order-by="'title'">Title</th>
 <th order-by="'text'">Text</th>
 <tr ng-repeat="post in posts | orderBy:predicate:reverse">

 * @returns {{restrict: string, require: string, compile: Function}}
 */

// @ngInject
function orderBy() {
  return {
    restrict: 'A',
    require : '^sortTable',
    compile : function( elem, attrs ) {

      elem.css( { 'position': 'relative', 'cursor': 'pointer' } );

      var arrowDown = angular.element( '<i class="fa fa-sort-desc sort-arrow" ng-if="isDescending( ' + attrs.orderBy + ')"></i>' ),
          arrowUp = angular.element( '<i class="fa fa-sort-up sort-arrow" ng-if="isNotDescending( ' + attrs.orderBy + ')"></i>' )

      arrowDown.css( { 'position': 'absolute', 'top': 0, 'right': 0 } );

      arrowUp.css( { 'position': 'absolute', 'top': 0, 'right': 0 } );

      elem.append( arrowDown )
        .append( arrowUp );

      return function( $scope, elem, attrs, sortTableController ) {

        $scope.isDescending = function( fieldName ) {

          return $scope.predicate == fieldName && $scope.reverse;
        }

        $scope.isNotDescending = function( fieldName ) {

          return $scope.predicate == fieldName && ! $scope.reverse;
        }

        elem.on( "click", function() {

          var field = attrs.orderBy;

          sortTableController.sort( field );

          $scope.$digest();


        } )
      }
    }
  }

}

module.exports = orderBy;