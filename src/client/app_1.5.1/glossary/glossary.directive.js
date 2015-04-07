(function () {
    'use strict';
    angular.module('dataDoodler.module')
        .directive('glossary',[function(){
            return {
                restrict:'E',
                templateUrl:'app_1.5.1/glossary/glossary.template.html',
                scope:{dataSources:"="},
                controller:function($scope){
                    $scope.myname='kent'
                    console.log($scope);
                }
            }
        }])
}());
