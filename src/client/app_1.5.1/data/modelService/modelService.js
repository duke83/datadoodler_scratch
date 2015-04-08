(function () {
    'use strict';
    angular.module('dataDoodler.module')
        .factory('modelService', [function () {

            var modelService = {};
            modelService.model = {};
            modelService.title = "The News on the News";

            modelService.windows = [
                {"title": "Glossary", "active": true},
                {"title": "Variables", "active": false},
                {"title": "Storyboard", "active": false}
            ];

            modelService.dataSources = [
                {"name": "FDIC SDI Data", "uniqueName": "fdicdatasource-0000-0000-0000"},
                {"name": "Custom Upload 5/5/2015", "uniqueName": "customupload5/5/2015-0000-0000-0000"}
            ];
            return modelService;
        }])
}());
