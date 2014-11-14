// @ngInject
function registerModalController( $scope, $modalInstance ) {

  $scope.close = function() {
    $modalInstance.dismiss('cancel');
  }

  $scope.onSuccess = function() {

  }

}

module.exports = registerModalController;