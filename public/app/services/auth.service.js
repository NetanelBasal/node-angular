// @ngInject
function authService( $http ) {

  /**
   *
   * @param cred
   * @returns {HttpPromise}
   */
  this.login = function( cred ) {
    return $http.post('auth/login', cred);
  }

  /**
   *
   * @param user
   * @returns {HttpPromise}
   */
  this.register = function( user ) {
    return $http.post('auth/register', user);
  }

}

module.exports = authService;

