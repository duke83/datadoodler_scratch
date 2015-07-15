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
                    doodleDataService.createDoodleWidget('calc', 'test', true, glossaryVariable);
                return;
                }
                //if not selected, remove
                doodleDataService.removeDoodleWidget(glossaryVariable.widgetId)

            }
        }
   };
}]);
