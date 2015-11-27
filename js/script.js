
var app = angular.module("menuSelect", ['ngRoute']);

//routing
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '/templates/development.html'
        })
        .when('/development', {
            templateUrl : '/templates/development.html'
        })
        .when('/scripting', {
            templateUrl : '/templates/scripting.html'
        })
         .when('/styling', {
            templateUrl : '/templates/stylingComparison.html'
        })
          .when('/framework', {
            templateUrl : '/templates/frameworks.html'
        })
        .when('/stylingComparison', {
            templateUrl : '/templates/styling-content.html'
        })
        .when('/stylingComparison1', {
            templateUrl : '/templates/scss-content.html'
        });
});


