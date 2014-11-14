// @ngInject
function HomeController( $scope ) {

  var home = this;

  $scope.toggle = function() {
   this.test = ! this.test;
  }




}

module.exports = HomeController;