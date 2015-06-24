"use strict";

angular.module('ddCalculation').directive('ddCalculationMenu', function () {
	return {
		template: "<h1>Calculation Menu</h1>",
		link: function (scp, el, attrs) {
			console.log('CalculationMenu Scope',scp)
		}
	}
})