'use strict';

angular.module('doodleGlossary').directive('glossaryWidget','CalculationsService',function(CalculationsService){
    return{
        restrict:'E',
        templateUrl:'modules/doodleGlossary/directives/glossaryWidget.directive.html',
        scope:{widgetitem:"="},
        link:function(scp,el,att){

        }
        //template:'<h1>this is a template (not a templateUrl) for a datawidget</h1>'
    };
});
