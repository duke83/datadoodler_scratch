"use strict";

angular.module('ddCalculation').directive('ddStoryMenu', function () {
    return {
        template: "<h1>Story Menu</h1>",
        link: function (scp, el, attrs) {
            console.log('CalculationMenu Scope', scp)
        }
    }
})