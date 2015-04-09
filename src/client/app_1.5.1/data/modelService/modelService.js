(function () {
    'use strict';
    angular.module('dataDoodler.module')
        .factory('modelService', [function () {

            var modelService = {};
            modelService.model = {};
            modelService.title = "The News on the News";

            modelService.windows = [
                {
                    "title": "Glossary",
                    "active": true,
                    top: "80px",
                    left: "10px",
                    width: "95%",
                    height: "400px",
                    z: 0,
                    "hideMe": false
                },
                {
                    "title": "Variables",
                    "active": false,
                    top: "200px",
                    left: "30px",
                    width: "600px",
                    height: "400px",
                    z: 1,
                    "hideMe": false
                },
                {
                    "title": "Storyboard",
                    "active": false,
                    top: "350px",
                    left: "50px",
                    width: "600px",
                    height: "400px",
                    z: 0,
                    "hideMe": false
                }
            ];

            modelService.activateWindow = function (windowTitle) {
                //We *could* just set all the other windows z-index to 0, and set this z-index to 1
                //but that would destroy the layer order the user has manually set.
                //so we first get highest z-index currently set, and add 1 to it to apply to this window
                var maxZ = 0;
                for (var j = 0; j < modelService.windows.length; j++) {
                    if (modelService.windows[j].z > maxZ)
                        maxZ = modelService.windows[j].z;
                }
                for (var i = 0; i < modelService.windows.length; i++) {
                    if (modelService.windows[i].title === windowTitle) {
                        modelService.windows[i].active = true;
                        modelService.windows[i].hideMe = false;
                        modelService.windows[i].z = maxZ + 1;
                    }
                }
            };

            modelService.dataSources = [
                {"name": "FDIC SDI Data", "uniqueName": "fdicdatasource-0000-0000-0000"},
                {"name": "Custom Upload 5/5/2015", "uniqueName": "customupload5/5/2015-0000-0000-0000"}
            ];
            return modelService;
        }])
}());
