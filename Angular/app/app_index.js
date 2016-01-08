angular.module("IndexApp",["ngRoute"])

.config(function($routeProvider){
	$routeProvider
		.when("/",{
			controller: "indexController",
			templateUrl: "templates/index/formas.html"
		})
});