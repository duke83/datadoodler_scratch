'user strict';

angular.module('doodlecalc')
    .factory('CalculationsService',[function(){

        var CalculationsService={};

        CalculationsService.Calculations=[4,5,6];

        //CalculationsService.AddCalculation = function (calc) {
        //    CalculationsService.Calculations.push(calc);
        //}

        return CalculationsService;
}]);
