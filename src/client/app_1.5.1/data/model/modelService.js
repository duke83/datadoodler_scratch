(function () {
    'use strict';
    angular.module('dataDoodler.module')
        .factory('modelService', [function () {

            var modelService = {};
            modelService.model={};
            modelService.title="The News on the News";

            modelService.windows=[
                {title:"Glossary", active:true},
                {title:"Variables", active:true},
                {title:"Storyboard", active:false}
            ]

            modelService.dataSources={"Name":"FDIC Datasource"};
            return modelService;
        }])
}());
