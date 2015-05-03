var app = angular.module('ladd', ['ngRoute'])

app.config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: '/templates/homeTmpl.html',
		controller: 'homeCtrl'
	})
	.when('/projects', {
		templateUrl: '/templates/projectsTmpl.html'
	})
	.when('/hobbies', {
		templateUrl: '/templates/hobbiesTmpl.html'
	})
	.when('/contact', {
		templateUrl: '/templates/contactTmpl.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})