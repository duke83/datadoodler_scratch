'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('doodledataset').factory('DatasetService', ['$resource',
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
