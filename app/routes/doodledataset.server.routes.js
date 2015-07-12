'use strict';

/**
 * Module dependencies.
 */
var doodledatasets = require('../../app/controllers/doodledatasets.server.controller');

module.exports = function(app) {
    // Article Routes
    app.route('/datasets')
        .get(doodledatasets.list)
        //.post(doodledatasets.create);

    //app.route('/datasets/:datasetId')
    //    .get(doodledatasets.read)
    //    .put(doodledatasets.update)
    //    .delete(doodledatasets.delete);

    // Finish by binding the article middleware
   // app.param('datasetId', doodledatasets.articleByID);
};
