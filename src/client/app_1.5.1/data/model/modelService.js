(function () {
    'use strict';
    angular.module('dataDoodler.module')
        .factory('modelService', [function () {

            var modelService = {};
            modelService.model={};
            modelService.title="The News on the News";

            return modelService;
        }])
}());
