'use strict';

// Setting up route
angular.module('layout').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('ddDashboard', {
			url: '/',
			templateUrl: 'modules/layout/views/layout.client.view.html'
		});
	}
]);
