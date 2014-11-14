angular.module( 'sort.table' , [] )

  .directive('sortTable', require('./sort.table.directive'))

  .directive('orderBy', require('./order.by.directive'));