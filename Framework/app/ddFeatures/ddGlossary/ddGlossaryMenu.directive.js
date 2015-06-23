"use strict";

angular.module('ddCalculation').directive('ddGlossaryMenu.directive', function () {
    return {
        template: "<h1>GlossaryMenu</h1>",
        link: function (scp, el, attrs) {
            console.log('CalculationMenu Scope', scp)
        }
    }
})