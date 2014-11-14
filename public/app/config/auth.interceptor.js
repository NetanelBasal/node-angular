// @ngInject
function authInterceptor( userService, $injector ) {
  return {
    'request': function( $config ) {

      if( userService.authUser ) {
        $config.headers[ 'Authorization' ] = 'Bearer ' + userService.authUser.token;
      }
      return $config;
    },

    'responseError': function( rejection ) {
      if( rejection.status === 400 ) {

        var $state = $injector.get('$state'),
            $modal = $injector.get('$modal'),
            modalInstance = $modal.open({
              templateUrl: 'app/auth/login/loginModal.html',
              controller : 'loginModalController',
              size       : 'lg'
            });

        modalInstance.result.then(function() {
          $state.go($state.current, {}, { reload: true });
        });

      }
    }
  }
}

module.exports = authInterceptor;