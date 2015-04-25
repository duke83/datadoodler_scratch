(function () {
    'use strict';
    angular.module('dataDoodler.module')
        .directive('datasourcesPanel',function(modelService,glossaryService){
            return {
                restrict:'E',
                scope:{},
                templateUrl:'app_1.5.1/glossary/datasourcesPanel/datasourcesPanel.template.html',
                controller:function(){
                    var vm=this;
                    vm.test = "this is my test";
                    vm.modelService1 = modelService;
                    vm.showDatasetInfo=true;
                    vm.showDatasetInfo=function(dsName){
                        console.log(dsName)
                    }
                },
                controllerAs:'vm',
                bindToController:true,
                link:function(scp,el,attrs){
                    scp.modelService = modelService;
                    scp.glossaryService = glossaryService;
                }

            }
        })
}());
