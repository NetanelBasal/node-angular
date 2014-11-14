// @ngInject
function register() {
  return {
    restrict: 'AE',
    templateUrl: 'app/auth/register/register.tpl.html',
    scope: {
      onSuccess: '='
    },
    controller: controller,
    link: link
  }


  function link( $scope, elem, attrs ) {

  }


  // @ngInject
  function controller( $scope, authService ) {

    $scope.register = function() {

      if($scope.registerForm.$valid) {
        authService
          .register($scope.user)
          .then(function(res) {
              $scope.onSuccess();
          })
          .catch(function() { $scope.error = true; })

      }
    }
  }
}


module.exports = register;