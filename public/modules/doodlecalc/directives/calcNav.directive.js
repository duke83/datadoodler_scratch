'use strict';

angular.module('doodlecalc').directive('calcNav',['doodleDataService',function(doodleDataService){
    return{
        restrict:'E',
        templateUrl:'modules/doodlecalc/directives/calcNav.directive.html',
        controller:function($scope){
            $scope.calculations=doodleDataService.doodleWidgets;
            //$scope.CalculationsService=CalculationsService;
            //$scope.Calculations=$scope.doodleWidgets
        }
    };
}]);
