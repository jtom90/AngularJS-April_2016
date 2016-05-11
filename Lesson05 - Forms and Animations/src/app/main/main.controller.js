(function() {
  'use strict';

  angular
    .module('template')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var self = this;
    self.greeting = "Hello World"

    self.phoneExp = /^\(\d\d\d\) \d\d\d-\d\d\d\d$/;
  }

})();
