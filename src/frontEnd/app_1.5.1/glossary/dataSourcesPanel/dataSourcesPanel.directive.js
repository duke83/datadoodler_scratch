(function () {
    'use strict';
    angular.module('dataDoodler.module')
        .directive('datasourcesPanel',function(modelService){
            return {
                restrict:'E',
                scope:{},
                templateUrl:'app_1.5.1/glossary/datasourcesPanel/datasourcesPanel.template.html',
                link:function(scp,el,attrs){
                    scp.modelService = modelService;
                }

            }
        })
}());
