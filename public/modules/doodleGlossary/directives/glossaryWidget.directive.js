'use strict';


angular.module('doodleGlossary').directive('glossaryWidget', ['doodleDataService',function (doodleDataService) {
    return {
        restrict: 'E',
        templateUrl: 'modules/doodleGlossary/directives/glossaryWidget.directive.html',
        scope: {widgetitem: "="},
        link: function (scp, el, att) {
            scp.checkboxChange = function (glossaryVariable) {
                console.log(glossaryVariable);
                if(glossaryVariable.isSelected) {
                    var newWidgetId = doodleDataService.createDoodleWidget('calc', 'test', true, glossaryVariable);
                    //update the glossary variable with the widgetId to enable removale.
                    glossaryVariable.widgetId = newWidgetId;
                    return;
                }
                //if not selected, remove
                doodleDataService.removeDoodleWidget(glossaryVariable.widgetId)

            }
        }
   };
}]);
