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

})();



