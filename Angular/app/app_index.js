angular.module("IndexApp",["ngRoute","ngResource"])

.config(function($routeProvider){
	$routeProvider
		.when("/",{
			controller: "indexController",
			templateUrl: "templates/index/formas.html"
		})
});