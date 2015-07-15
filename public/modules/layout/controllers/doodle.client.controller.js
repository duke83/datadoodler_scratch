'use strict';

angular.module('layout').controller('doodleLayoutController', ['$scope', 'DatasetService', function ($scope, DatasetService) {


    $scope.doodleWidgets = [];

    $scope.findDatasets = function () {
        var glossaries = DatasetService.query();
        glossaries.$promise.then(function (g) {
                g.forEach(function (glsry) {

                        $scope.createDoodleWidget('glossary', glsry.Name, false, glsry);
                        console.log(glsry);
                    }
                )
            }
        );
    };


    //this is called in glossaryWidget when (un)selecting a variable
    $scope.removeDoodleWidget = function (widgetId) {
        if (widgetId) {
            for (var i = 0; $scope.doodleWidgets.length; i++) {
                if ($scope.doodleWidgets[i].widgetId === widgetId) {
                    $scope.doodleWidgets.splice(i, 1);
                    return;
                }
            }
        }
    };


    $scope.createDoodleWidget = function (widgetType, widgettitle, onDashboard, payload) {
        var item = {
            size: {x: 3, y: 3},
            type: widgetType,
            widgetTitle: widgettitle,
            widgetId: createDoodleWidgetId(widgetType),
            onDashboard: onDashboard,
            payload: payload
        };

        $scope.doodleWidgets.push(item);
        //return newWidget.widgetId;
    }


    //create a doodleWidgetId property
    function createDoodleWidgetId(widgetType, usr) {
        var dt = new Date().getTime();
        var uEmail = usr ? usr.email : 'kdm@adaptive.codes';
        var newid = widgetType.substr(0, 1) + dt + uEmail;
        return newid;
    }


    // maps the item from customItems in the scope to the gridsterItem options
    $scope.customItemMap = {
        sizeX: 'item.size.x',
        sizeY: 'item.size.y',
        row: 'item.position[0]',
        col: 'item.position[1]',
        minSizeY: 'item.minSizeY',
        maxSizeY: 'item.maxSizeY'
    };

    $scope.gridsterOpts = {
        columns: 6, // the width of the grid, in columns
        pushing: true, // whether to push other items out of the way on move or resize
        floating: true, // whether to automatically float items up so they stack (you can temporarily disable if you are adding unsorted items with ng-repeat)
        swapping: false, // whether or not to have items of the same size switch places instead of pushing down if they are the same size
        width: 'auto', // can be an integer or 'auto'. 'auto' scales gridster to be the full width of its containing element
        colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
        rowHeight: 'match', // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
        margins: [10, 10], // the pixel distance between each widget
        outerMargin: true, // whether margins apply to outer edges of the grid
        isMobile: false, // stacks the grid items if true
        mobileBreakPoint: 600, // if the screen is not wider that this, remove the grid layout and stack the items
        mobileModeEnabled: true, // whether or not to toggle mobile mode when screen width is less than mobileBreakPoint
        minColumns: 1, // the minimum columns the grid must have
        minRows: 2, // the minimum height of the grid, in rows
        maxRows: 100,
        defaultSizeX: 2, // the default width of a gridster item, if not specifed
        defaultSizeY: 1, // the default height of a gridster item, if not specified
        minSizeX: 1, // minimum column width of an item
        maxSizeX: null, // maximum column width of an item
        minSizeY: 1, // minumum row height of an item
        maxSizeY: null, // maximum row height of an item
        resizable: {
            enabled: true,
            handles: ['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw'],
            start: function (event, $element, widget) {
            }, // optional callback fired when resize is started,
            resize: function (event, $element, widget) {
            }, // optional callback fired when item is resized,
            stop: function (event, $element, widget) {
            } // optional callback fired when item is finished resizing
        },
        draggable: {
            enabled: true, // whether dragging items is supported
            handle: '.my-class', // optional selector for resize handle
            start: function (event, $element, widget) {
            }, // optional callback fired when drag is started,
            drag: function (event, $element, widget) {
            }, // optional callback fired when item is moved,
            stop: function (event, $element, widget) {
            } // optional callback fired when item is finished dragging
        }
    };
}]);
