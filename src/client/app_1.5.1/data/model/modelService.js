(function () {
    'use strict';
    angular.module('dataDoodler.module')
        .factory('modelService', [function () {

            var modelService = {};
            modelService.model={};
            modelService.title="The News on the News";

            modelService.windows=[
                {title:"Glossary"},
                {title:"Variables"},
                {title:"Storyboard"}
            ]

            return modelService;
        }])
}());
