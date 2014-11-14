(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function () {
  'use strict'
  angular.module('auth.local', [])

      .config( ["$stateProvider", "$urlRouterProvider", function( $stateProvider, $urlRouterProvider ) {

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
      }])

      .controller('loginController', require('./login/login.controller'))

      .controller('registerController', require('./register/register.controller'))

      .controller('registerModalController', require('./register/registerModal.controller'))

      .controller('loginModalController', require('./login/loginModal.controller'))

      .directive('register', require('./register/register.directive'))

      .directive('login', require('./login/login.directive'))

      .directive('validEmail', require('./register/email-validation.directive'));

})();
},{"./login/login.controller":2,"./login/login.directive":3,"./login/loginModal.controller":4,"./register/email-validation.directive":5,"./register/register.controller":6,"./register/register.directive":7,"./register/registerModal.controller":8}],2:[function(require,module,exports){
// @ngInject
function loginController( $scope, authService) {

  $scope.onSuccess = function() {

  }
}
loginController.$inject = ["$scope", "authService"];

module.exports = loginController;
},{}],3:[function(require,module,exports){
// @ngInject
function login( $sessionStorage , userService) {
  controller.$inject = ["$scope", "authService"];
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
login.$inject = ["$sessionStorage", "userService"];


module.exports = login;
},{}],4:[function(require,module,exports){
// @ngInject
function loginModalController( $scope, $modalInstance ) {

  $scope.close = function() {
    $modalInstance.dismiss('cancel');
  }

  $scope.onSuccess = function() {
    $modalInstance.close();
  }

}
loginModalController.$inject = ["$scope", "$modalInstance"];

module.exports = loginModalController;
},{}],5:[function(require,module,exports){
// @ngInject
function validEmail() {
  return {
    restrict: 'A',
    require: "ngModel",
    link: link
  }
  function link( $scope, elem, attrs, ngModel ) {
    ngModel.$validators.validEmail = function(modelValue) {
      var emailRegex = new RegExp("^([a-zA-Z0-9]+[a-zA-Z0-9._%-]*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4})$");
      return emailRegex.test(modelValue);
    }
  }
}


module.exports = validEmail;
},{}],6:[function(require,module,exports){
// @ngInject
function registerController( $scope, authService  ) {

  $scope.onSuccess = function() {

  }

}
registerController.$inject = ["$scope", "authService"];

module.exports = registerController;
},{}],7:[function(require,module,exports){
// @ngInject
function register() {
  controller.$inject = ["$scope", "authService"];
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
},{}],8:[function(require,module,exports){
// @ngInject
function registerModalController( $scope, $modalInstance ) {

  $scope.close = function() {
    $modalInstance.dismiss('cancel');
  }

  $scope.onSuccess = function() {

  }

}
registerModalController.$inject = ["$scope", "$modalInstance"];

module.exports = registerModalController;
},{}],9:[function(require,module,exports){
(function () {
    'use strict'

  //@ngInject
    function fieldMatch($parse) {
      return {
        restrict:'AE',
        require: 'ngModel',
        link: link
      }

      function link($scope, elem, attrs, ctrl) {
        $scope.$watch(function() {
          var valid = $parse(attrs.fieldMatch)($scope) === ctrl.$modelValue;
          ctrl.$setValidity('mismatch', valid);
        });
      }
    }
    fieldMatch.$inject = ["$parse"];

  angular.module('fieldMatch', [])
      .directive('fieldMatch', fieldMatch);


})();








},{}],10:[function(require,module,exports){
(function() {
  'use strict'

  angular.module('password.chars.validator', [])
    .directive('passwordCharsValidator', passwordCharsValidator);

  // @ngInject
  function passwordCharsValidator() {
    return {
      restrict: 'A',
      link    : link,
      require : 'ngModel'
    }
    function link( $scope, elem, attrs , ngModelController) {

      var REQUIRED_PATTERNS = [
        /\d+/,    //numeric values
        /[a-z]+/, //lowercase values
        /[A-Z]+/, //uppercase values
        /\W+/,    //special characters
        /^\S+$/   //no whitespace allowed
      ];

      ngModelController.$validators.passwordCharacters = function( value ) {
        var status = true;
        angular.forEach(REQUIRED_PATTERNS, function( pattern ) {
          status = status && pattern.test(value);
        });
        return status;
      };
    }
  }

})();

},{}],11:[function(require,module,exports){
(function() {
  'use strict'

  angular.module('slide.toggle.table.row', [])

    .directive('slideToggleRow', slideToggleTableRow)

// @ngInject
  function slideToggleTableRow( $compile ) {

    return {
      restrict: 'A',
      scope   : {
        object: '=on'
      },
      link    : link
    }

    function link( $scope, elem, attrs ) {

      var td = angular.element('<td></td>'),
          closeRow = angular.element('<i class="fa fa-arrow-circle-right" ng-if="!object.open"></i>'),
          openRow = angular.element('<i class="fa fa-arrow-circle-down" ng-if="object.open"></i>');

      td.append(closeRow).append(openRow);

      $compile(td)($scope);

      elem.append(td);

      var firstChild = elem.next().find('td').children().first();

      firstChild.css({ 'overflow': 'hidden', 'display': 'none' });

      $scope.object.open = false;

      elem.on("click", function() {

        $scope.$apply(function() {

          $scope.object.open = ! $scope.object.open;

          firstChild.slideToggle();

        });
      });
    }

  }
  slideToggleTableRow.$inject = ["$compile"];

})();




},{}],12:[function(require,module,exports){
/**
 * example
 *<table class="table table-hover" sort-table>
 <th order-by="'title'">Title</th>
 <th order-by="'text'">Text</th>
 <tr ng-repeat="post in posts | orderBy:predicate:reverse">

 * @returns {{restrict: string, require: string, compile: Function}}
 */

// @ngInject
function orderBy() {
  return {
    restrict: 'A',
    require : '^sortTable',
    compile : function( elem, attrs ) {

      elem.css( { 'position': 'relative', 'cursor': 'pointer' } );

      var arrowDown = angular.element( '<i class="fa fa-sort-desc sort-arrow" ng-if="isDescending( ' + attrs.orderBy + ')"></i>' ),
          arrowUp = angular.element( '<i class="fa fa-sort-up sort-arrow" ng-if="isNotDescending( ' + attrs.orderBy + ')"></i>' )

      arrowDown.css( { 'position': 'absolute', 'top': 0, 'right': 0 } );

      arrowUp.css( { 'position': 'absolute', 'top': 0, 'right': 0 } );

      elem.append( arrowDown )
        .append( arrowUp );

      return function( $scope, elem, attrs, sortTableController ) {

        $scope.isDescending = function( fieldName ) {

          return $scope.predicate == fieldName && $scope.reverse;
        }

        $scope.isNotDescending = function( fieldName ) {

          return $scope.predicate == fieldName && ! $scope.reverse;
        }

        elem.on( "click", function() {

          var field = attrs.orderBy;

          sortTableController.sort( field );

          $scope.$digest();


        } )
      }
    }
  }

}

module.exports = orderBy;
},{}],13:[function(require,module,exports){
// @ngInject
function sortTable() {
  return {
    restrict  : 'A',
    controller: function( $scope ) {

      this.sort = function( fieldName ) {

        var field = fieldName.replace(/'/g, "");

        if ( $scope.predicate === field ) {

          $scope.reverse = ! $scope.reverse;

        } else {

          $scope.predicate = field;

          $scope.reverse = true;

        }

      };
    }
  }

}

module.exports = sortTable;
},{}],14:[function(require,module,exports){
angular.module( 'sort.table' , [] )

  .directive('sortTable', require('./sort.table.directive'))

  .directive('orderBy', require('./order.by.directive'));
},{"./order.by.directive":12,"./sort.table.directive":13}],15:[function(require,module,exports){
(function() {
  'use strict'

  //@ngInject
  function spinnerBtn() {
    return {
      restrict: 'AE',
      scope   : {
        loading: '='
      },
      compile : function( ele, attr ) {

        var spinner = angular.element( '<i class="fa fa-spinner net-spinner" ng-if="loading"></i>' );

        ele.append( spinner );

        ele.find( 'i' ).css( 'marginLeft', '5px' );

      }
    }

  }

  module.exports = spinnerBtn;
})();








},{}],16:[function(require,module,exports){
angular.module( 'spinner.btn' , [] )

  .directive('spinnerBtn', require('./spinner.btn.directive'));
},{"./spinner.btn.directive":15}],17:[function(require,module,exports){
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
authInterceptor.$inject = ["userService", "$injector"];

module.exports = authInterceptor;
},{}],18:[function(require,module,exports){
// @ngInject
function config( $httpProvider ) {

  $httpProvider.interceptors.push('authInterceptor');

}
config.$inject = ["$httpProvider"];

module.exports = config;
},{}],19:[function(require,module,exports){
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
runPhase.$inject = ["$rootScope", "userService", "$state", "$sessionStorage"];

module.exports = runPhase;
},{}],20:[function(require,module,exports){
(function() {
  'use strict'

  var modules = require('./modules');

  require('./common/field-match.module');

  require('./common/spinner-btn/spinner.btn.module');

  require('./common/sort-table/sort.table.module');

  require('./common/slide.toggle.table.row');

  require('./common/password.chars.validator');

  /************************** APP internal modules **********************/

  require('./services/services.index');

  angular.module('app', modules)

    .config(require('./config/config.index'))

    .factory('authInterceptor', require('./config/auth.interceptor'))

    .run(require('./config/run.phase.js'))

  require('./home/home.index');

  require('./auth/auth.index');

  require('./nav/nav.index');

})();



},{"./auth/auth.index":1,"./common/field-match.module":9,"./common/password.chars.validator":10,"./common/slide.toggle.table.row":11,"./common/sort-table/sort.table.module":14,"./common/spinner-btn/spinner.btn.module":16,"./config/auth.interceptor":17,"./config/config.index":18,"./config/run.phase.js":19,"./home/home.index":22,"./modules":23,"./nav/nav.index":25,"./services/services.index":27}],21:[function(require,module,exports){
// @ngInject
function HomeController( $scope ) {

  var home = this;

  $scope.toggle = function() {
   this.test = ! this.test;
  }




}
HomeController.$inject = ["$scope"];

module.exports = HomeController;
},{}],22:[function(require,module,exports){
(function( TweenMax ) {
  'use strict'
  angular.module('app')

    .config(["$stateProvider", "$urlRouterProvider", function( $stateProvider, $urlRouterProvider ) {

      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state('home', {
          url         : "/",
          controller  : 'HomeController',
          controllerAs: 'home',
          templateUrl : "app/home/home.html"
        })
    }])

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

},{"./home.controller":21}],23:[function(require,module,exports){
(function() {
  'use strict'

  var modules = [
    /** Third party modules **/

    'ui.router',
    'ui.bootstrap',
    'ngStorage',
    'angularUtils.directives.dirPagination',
    'slide.toggle.table.row',
    'ngAnimate',
    'ngMessages',

  /** Local modules **/

    'password.chars.validator',
    'sort.table',
    'services',
    'spinner.btn',
    'auth.local',
    'fieldMatch'
  ];

  module.exports = modules;

})();
},{}],24:[function(require,module,exports){
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
navController.$inject = ["$scope", "$modal", "$sessionStorage", "userService"];

module.exports = navController;
},{}],25:[function(require,module,exports){
(function () {
  'use strict'
  angular.module('app')

      .controller('navController', require('./nav.controller'));

})();
},{"./nav.controller":24}],26:[function(require,module,exports){
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
authService.$inject = ["$http"];

module.exports = authService;


},{}],27:[function(require,module,exports){
angular.module('services', [])

.service('authService', require('./auth.service.js'))

.service('userService', require('./user.service.js'))
},{"./auth.service.js":26,"./user.service.js":28}],28:[function(require,module,exports){
// @ngInject
function userService() {
  /**
   *
   * @type {null}
   */
  this.authUser = null;
}

module.exports = userService;

},{}]},{},[20])