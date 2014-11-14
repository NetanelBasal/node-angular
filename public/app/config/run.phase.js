/*@ngInject*/
function runPhase( $rootScope, userService, $state , $sessionStorage) {

  userService.authUser = $sessionStorage.user || null;

  $rootScope.userService = userService;



  $rootScope.$on("$stateChangeStart", function(event, toState) {

    if (toState.authenticate && !userService.authUser) {
      event.preventDefault();
      $state.go("home");
    }

  });

  $rootScope.$on('$stateChangeError', function(event, toState,toParams, fromState, fromParams, error) {
    console.log(error);
  });

  $rootScope.$on('$stateChangeSuccess', function() {

  })
}

module.exports = runPhase;