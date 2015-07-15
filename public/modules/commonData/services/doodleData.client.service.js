'use strict';

//Used for communicating with the Dataset REST server endpoints/routes
angular.module('commonData').factory('doodleDataService', ['$resource',
    function($resource) {
        return $resource('datasets/:datasetId', {
            articleId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);
