// @ngInject
function login( $sessionStorage , userService) {
  return {
    restrict: 'AE',
    templateUrl: 'app/auth/login/login.tpl.html',
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

    $scope.login = function() {

      if($scope.loginForm.$valid) {

        authService
          .login($scope.user)

          .then(function(res) {

            $sessionStorage.user = { token: res.data.token, name: res.data.user };

            userService.authUser =  $sessionStorage.user;

            $scope.onSuccess();
          })
          .catch(function() { $scope.error = true; })

      }
    }
  }
}


module.exports = login;