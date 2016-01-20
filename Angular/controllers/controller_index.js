
	// Creación del módulo
var IndexApp = angular.module('IndexApp', ['ngRoute']);

// Configuración de las rutas
IndexApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : 'templates/inicio.html',
            controller  : 'IndexController'
        })
 
        .otherwise({
            redirectTo: '/'
        });
});

IndexApp.controller("IndexController",function($scope,$http){
	$scope.posts=[];
    $http.get('http://localhost:9000/Country/')
	.success(function(data){
		console.log(data);
		$scope.posts = data;
	})
	.error(function(err){

	});
});
