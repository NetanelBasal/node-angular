(function () {
  'use strict'
  angular.module('auth.local', [])

      .config( function( $stateProvider, $urlRouterProvider ) {

        $stateProvider
            .state('login', {
              url: "/auth/login",
              controller:'loginController',
              templateUrl: "app/auth/login/login.html"
            })
            .state('register', {
              url: "/auth/register",
              controller:'registerController',
              templateUrl: "app/auth/register/register.html"
            })
      })

      .controller('loginController', require('./login/login.controller'))

      .controller('registerController', require('./register/register.controller'))

      .controller('registerModalController', require('./register/registerModal.controller'))

      .controller('loginModalController', require('./login/loginModal.controller'))

      .directive('register', require('./register/register.directive'))

      .directive('login', require('./login/login.directive'))

      .directive('validEmail', require('./register/email-validation.directive'));

})();