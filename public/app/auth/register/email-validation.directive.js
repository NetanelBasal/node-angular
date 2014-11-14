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