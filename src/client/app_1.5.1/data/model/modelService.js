(function () {
    'use strict';
    angular.module('dataDoodler.module')
        .factory('modelService', [function () {

            var modelService = {};
            modelService.model={};
            modelService.title="The News on the News";

            modelService.windows=[
                {title:"Glossary", active:false},
                {title:"Variables", active:false},
                {title:"Storyboard", active:false}
            ]

            return modelService;
        }])
}());
