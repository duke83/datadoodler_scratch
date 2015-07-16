'use strict';

//Used for communicating with the Dataset REST server endpoints/routes
angular.module('commonData').factory('doodleDataService', ['$resource',
    function($resource) {

        var doodleDataService  = {};

        doodleDataService.datasetRestResource= $resource('datasets/:datasetId',
            {articleId: '@_id'},
            {update: {method: 'PUT'}}
        );




        doodleDataService.doodleWidgets = [];

        doodleDataService.findDatasets = function () {
            var glossaries = doodleDataService.datasetRestResource.query();
            glossaries.$promise.then(function (g) {
                    g.forEach(function (glsry) {

                            doodleDataService.createDoodleWidget('glossary', glsry.Name, false, glsry);
                            console.log(glsry);
                        }
                    )
                }
            );
        };


        //this is called in glossaryWidget when (un)selecting a variable
        doodleDataService.removeDoodleWidget = function (widgetId) {
            if (widgetId) {
                for (var i = 0; doodleDataService.doodleWidgets.length; i++) {
                    if (doodleDataService.doodleWidgets[i].widgetId === widgetId) {
                        doodleDataService.doodleWidgets.splice(i, 1);
                        return;
                    }
                }
            }
        };


        doodleDataService.createDoodleWidget = function (widgetType, widgettitle, onDashboard, payload) {

            var item = {
                size: {x: 3, y: 3},
                type: widgetType,
                widgetTitle: widgettitle,
                widgetId: getDoodleWidgetId(widgetType),
                onDashboard: onDashboard,
                payload: payload
            };

            doodleDataService.doodleWidgets.push(item);


            return item.widgetId;
        };


        //create a doodleWidgetId property
        function getDoodleWidgetId(widgetType, usr) {
            var dt = new Date().getTime();
            var uEmail = usr ? usr.email : 'kdm@adaptive.codes';
            var newid = widgetType.substr(0, 1) + dt + uEmail;
            return newid;
        }


        return doodleDataService;

    }


]);
