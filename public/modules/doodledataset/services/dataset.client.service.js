'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('doodledataset').factory('Dataset', ['$resource',
    function($resource) {
        return $resource('datasets/:articleId', {
            articleId: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
]);
