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


