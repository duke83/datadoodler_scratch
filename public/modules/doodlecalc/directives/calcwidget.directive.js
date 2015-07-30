'use strict';

angular.module('doodlecalc').directive('calcwidget',function(){
    return{
        restrict:'E',
        templateUrl:'modules/doodlecalc/directives/calcwidget.directive.html',
        scope: {widgetitem: "="},
        link:function(scp,el,attrs){
            scp.vars=[{name:'Title', id:'v123441',pk:'Title',type:'string',
            rows:['Twins','True Lies','Total Recall','The Villain',
                'The Terminator', 'The Running Man']
            }]
        }
    };
});
