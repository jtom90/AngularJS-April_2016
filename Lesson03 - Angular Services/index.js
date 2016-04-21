angular.module('MyModule', [])


.value('COLORS', [{
	name: 'red'
}, {
	name: 'green'
}, {
	name: 'blue'
}, {
	name: 'yellow'
}])

.controller('AuxiliaryController', function(COLORS) {
	var self = this;
	self.secondCtrlColors = angular.copy(COLORS);
	self.popElement = function() {
		self.secondCtrlColors.pop();
	}
})


.controller('MyController', function($timeout, $interval, $log, $scope, Car, COLORS) {
	var self = this;

	self.car = new Car('Ford', 'Explorer');

	self.myColors = COLORS;


	// self.car = {
	// 	make: 'Ford',
	// 	model: 'Explorer'
	// };

	// self.onYearChanged = function() {
	// 	if (self.car.year) {
	// 		self.car.age = 2016 - parseInt(self.car.year);
	// 	}
	// };

	// $scope.$watch('ctrl.car', function(newVal, oldVal) {
	// 	// console.log("newVal: ", newVal);
	// 	// console.log("oldVal: ", oldVal);
	// 	if (newVal) {
	// 		self.car.age = 2016 - parseInt(newVal);
	// 	}
		
	// }, true);

















	// $log.log('normal log');
	// $log.info('info log');
	// $log.error('error log');
	// $log.debug('debug log');

	// self.name = 'Harry';

	// $timeout(function() {
	// 	console.log('function was called');
	// 	self.name = 'George';
	// }, 3000);

	// self.count = 10;
	// $interval(function() {
	// 	self.count--;
	// }, 1000, 10);



})


.factory('Car', function() {

	function Car(make, model) {
	    this.make = make;
	    this.model = model;
	}

	Car.prototype.setYear = function(year) {
	     this.year = year;
	     this.age = 2016 - parseInt(year);
	}

	Car.prototype.needsRepair = function() {
	    if (this.age > 10) { 
	    	return true;
	    } else {
	    	return false;
	    }
	}

	return Car;
});