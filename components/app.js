angular.module('app', ['ngRoute'])

.config(function($routeProvider) { 
  $routeProvider
	/*.when('/', {
	  controller:'ProjectListController as projectList',
	  templateUrl:'list.html',
	  resolve: resolveProjects
	})
	.when('/edit/:projectId', {
	  controller:'EditProjectController as editProject',
	  templateUrl:'detail.html',
	  resolve: resolveProjects
	})
	.when('/new', {
	  controller:'NewProjectController as editProject',
	  templateUrl:'detail.html',
	  resolve: resolveProjects
	})*/
	.otherwise({
	  redirectTo:'/'
	});
});