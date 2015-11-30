
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
        .when('/stylingContent', {
            templateUrl : '/templates/styling-content.html'
        })
        .when('/stylingComparison1', {
            templateUrl : '/templates/sass-content.html'
        })
        .when('/stylingComparison2', {
            templateUrl : '/templates/scss-content.html'
        })
        .when('/stylingComparison3', {
            templateUrl : '/templates/compass-content.html'
        });
        // .when('/variables', {
        //     templateUrl : '/templates/sassTemplates/variables.html'
        // })
        // .when('/nesting', {
        //     templateUrl : '/templates/sassTemplates/nesting.html'
        // })
        // .when('/partials', {
        //     templateUrl : '/templates/sassTemplates/partials.html'
        // })
        // .when('/import', {
        //     templateUrl : '/templates/sassTemplates/import.html'
        // })
        // .when('/mixins', {
        //     templateUrl : '/templates/sassTemplates/mixins.html'
        // })
        // .when('/inheritance', {
        //     templateUrl : '/templates/sassTemplates/inheritance.html'
        // })
        // .when('/back', {
        //     templateUrl : '/templates/scss-content.html'
        // })
        // .when('/nestingback', {
        //     templateUrl : '/templates/scss-content.html'
        // })
        // .when('/inheritback', {
        //     templateUrl : '/templates/scss-content.html'
        // })
        // .when('/partialsback', {
        //     templateUrl : '/templates/scss-content.html'
        // })
        // .when('/importback', {
        //     templateUrl : '/templates/scss-content.html'
        // })
        //  .when('/mixinsback', {
        //     templateUrl : '/templates/scss-content.html'
        // });
});


