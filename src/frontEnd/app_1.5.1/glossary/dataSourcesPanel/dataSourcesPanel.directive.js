(function () {
    'use strict';
    angular.module('layout.module')
        .directive('dataSourcesPanel',['modelService',function(modelService){
            return {
                restrict:'E',
                templateUrl:'app_1.5.1/glossary/dataSourcesPanel/dataSourcesPanel.template.html',
                controller:function($scope){
                    $scope.modelService=modelService;

                }
            }
        }])
}());
