'use strict';

angular.module('doodlecalc').directive('calcNav','CalculationsService',function(CalculationsService){
    return{
        restrict:'E',
        templateUrl:'modules/doodlecalc/directives/calcNav.directive.html',
        controller:function($scope){
            //$scope.CalculationsService=CalculationsService;
            //$scope.Calculations=$scope.doodleWidgets
        }
    };
});
