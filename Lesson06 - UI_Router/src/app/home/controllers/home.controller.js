angular.module('MyApp.Home')

.controller('HomeController', function() {
	var self = this;
	self.name = 'George'
	console.log('HomeController initialized');
});