"use strict";

angular.module('ddCalculation').directive('ddCalculationMenu.directive', function () {
	return {
		template: "<h1>CalculationMenu</h1>",
		link: function (scp, el, attrs) {
			console.log('CalculationMenu Scope',scp)
		}
	}
})