(function( TweenMax ) {
  'use strict'
  angular.module('app')

    .config(function( $stateProvider, $urlRouterProvider ) {

      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('home', {
          url         : "/",
          controller  : 'HomeController',
          controllerAs: 'home',
          templateUrl : "app/home/home.html"
        })
    })

    .controller('HomeController', require('./home.controller'))

    .animation(".net-fade", function() {
      return {
        leave: function( element, done ) {
          TweenMax.to(element, 1, { opacity: 0, 'left': '130px', onComplete: done });
        },
        enter: function( element, done ) {
          element.css('position', 'relative');
          TweenMax.from(element, 1, { opacity: 0, 'left': '130px', onComplete: done });
        }
      }
    });
})(TweenMax);
