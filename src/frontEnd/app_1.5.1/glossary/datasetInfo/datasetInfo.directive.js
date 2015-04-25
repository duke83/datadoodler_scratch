(function () {
    'use strict';
    angular.module('dataDoodler.module')
        .directive('datasetInfo',function(glossaryService){
            return {
                restrict:'E',
                scope:{},
                templateUrl:'app_1.5.1/glossary/datasetInfo/datasetInfo.template.html',
                controller:function(){
                    var vm=this;
                    vm.test = "this is my datasetInfo directive";
                    vm.glossaryService = glossaryService;
                    vm.showDatasetInfo=true;
                    vm.showDatasetInfo=function(dsName){
                        console.log(dsName)
                    }
                },
                controllerAs:'datasetInfo',
                bindToController:true
            }
        })
}());
