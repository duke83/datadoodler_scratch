'use strict';

angular.module('doodledataset').directive('datawidget',function(){
    return{
        restrict:'E',
        templateUrl:'modules/doodledataset/directives/datawidget.directive.html',
        scope:{widgetitem:"="},
        link:function(scp,el,att){

        }
        //template:'<h1>this is a template (not a templateUrl) for a datawidget</h1>'
    };
});
