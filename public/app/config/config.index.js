// @ngInject
function config( $httpProvider ) {

  $httpProvider.interceptors.push('authInterceptor');

}

module.exports = config;