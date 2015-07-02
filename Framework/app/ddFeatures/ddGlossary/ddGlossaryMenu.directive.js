"use strict";

angular.module('ddCalculation').directive('ddGlossaryMenu', function () {
    return {
        templateUrl: 'app/ddFeatures/ddGlossary/ddGlossary.template.html?',
        link: function (scp, el, attrs) {
            console.log('ddGlossaryMenu Scope', scp)
        }
    }
})