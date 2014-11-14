// @ngInject
function loginModalController( $scope, $modalInstance ) {

  $scope.close = function() {
    $modalInstance.dismiss('cancel');
  }

  $scope.onSuccess = function() {
    $modalInstance.close();
  }

}

module.exports = loginModalController;