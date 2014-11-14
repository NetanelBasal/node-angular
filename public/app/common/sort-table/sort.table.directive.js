// @ngInject
function sortTable() {
  return {
    restrict  : 'A',
    controller: function( $scope ) {

      this.sort = function( fieldName ) {

        var field = fieldName.replace(/'/g, "");

        if ( $scope.predicate === field ) {

          $scope.reverse = ! $scope.reverse;

        } else {

          $scope.predicate = field;

          $scope.reverse = true;

        }

      };
    }
  }

}

module.exports = sortTable;