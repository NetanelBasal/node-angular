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