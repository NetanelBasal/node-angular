// @ngInject
function navController( $scope, $modal , $sessionStorage , userService) {

  this.openLoginModal = function() {
    var modal = openModal('login');
  }

  this.openRegisterModal = function() {
    openModal('register');
  }

  this.logOut = function() {

    delete $sessionStorage.user;

    userService.authUser = null;
  }


  function openModal(type) {

    var view        = 'app/auth/' + type + '/' + type + 'Modal.html',
        controller = type + 'ModalController'

    var typeModal = $modal.open({
      templateUrl: view,
      controller: controller,
      size: 'lg'
    });

    return typeModal;
  }

}

module.exports = navController;