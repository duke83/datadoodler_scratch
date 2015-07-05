'use strict';

module.exports = function(app) {
	// Root routing
	var ddcore = require('../../app/controllers/ddcore.server.controller');
	//app.route('/').get(core.index);
	app.route('/dd').get(ddcore.ddindex);
};

