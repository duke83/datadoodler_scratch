'use strict';

/**
 * Module dependencies.
 */
exports.ddindex = function(req, res) {
    res.render('ddindex', {
        user: req.user || null,
        request: req
    });
};
