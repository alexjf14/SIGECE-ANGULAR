var IndexApp = angular.module('PagesApp', ['ngRoute']);

// Configuración de las rutas
IndexApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : '../templates/PlantillaInicio.html',
        })

         .when('/grupos', {
            templateUrl : '../templates/tesis/grupos.html'

    })

         .when('/feedback', {
            templateUrl : '../templates/tesis/feedback.html'

    })
 
        .otherwise({
            redirectTo: '/'
        });
});