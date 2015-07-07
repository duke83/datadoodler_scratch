'use strict';

// Setting up route
angular.module('ddcore').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/x');

		// Home state routing
		$stateProvider.
		state('ddDashboard', {
			url: '/x',
			templateUrl: 'modules/ddcore/views/dddashboard.client.view.html'
		});
	}
]);
