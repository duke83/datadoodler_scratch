/**
 * List of datasets
 */
exports.list = function (req, res) {
    res.json({'ds1': [1, 2, 3]})
};

/**
 * Article middleware
 */
//exports.datasetByID = function(req, res, next, id) {
//    Article.findById(id).populate('user', 'displayName').exec(function(err, article) {
//        if (err) return next(err);
//        if (!article) return next(new Error('Failed to load article ' + id));
//        req.article = article;
//        next();
//    });
//};
