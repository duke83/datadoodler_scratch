'use strict';

angular.module('doodledataset').directive('datawidget',function(){
    return{
        restrict:'E',
        templateUrl:'modules/doodledataset/directives/datawidget.directive.html'
        //template:'<h1>this is a template (not a templateUrl) for a datawidget</h1>'
    }
})
