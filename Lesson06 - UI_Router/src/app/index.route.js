(function() {
  'use strict';

  angular
    .module('template')
    
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, STATES) {

    $stateProvider
    .state(STATES.kHomeState, {
      url: '/',
      templateUrl: 'app/home/partials/home.main.html',
      controller: 'HomeController as ctrl'
      // controllerAs: 'ctrl'
    })
    .state(STATES.kContactsState, {
      url: '/contacts',
      templateUrl: 'app/contacts/partials/contacts.main.html',
      controller: 'ContactsController as ctrl'
    })
    .state(STATES.kStoreState, {
      url: '/store',
      templateUrl: 'app/store/partials/store.main.html',
      controller: 'StoreController as ctrl'
    });


    $urlRouterProvider.otherwise('/');
  }

})();
