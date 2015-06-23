"use strict";

angular.module('ddCalculation').directive('ddStoryMenu.directive', function () {
    return {
        template: "<h1>StoryMenu</h1>",
        link: function (scp, el, attrs) {
            console.log('CalculationMenu Scope', scp)
        }
    }
})