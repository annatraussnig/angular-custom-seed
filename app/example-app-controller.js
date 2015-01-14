(function() {
  'use strict';

  angular
    .module('exampleApp')
    .controller('ExampleCtrl', ExampleCtrl);

  function ExampleCtrl() {
    var _this = this;

    _this.aList = [1, 2, 3];
    _this.clearList = clearList;

    function clearList() {
      _this.aList = [];
    }
  }
})();
