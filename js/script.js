
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
});


//click event for sub-link
app.controller('styleComp',function($scope){
    $scope.myClass = [];
    $scope.myClass.push('no-display');
    $scope.styleComptoggleClass = function(){
        if($scope.myClass.indexOf('block-display') == -1){
            $scope.myClass.pop('no-display');
            $scope.myClass.push('block-display');
        }
        else{
            $scope.myClass.pop('block-display');
            $scope.myClass.push('no-display');
        }
    }
});

app.controller('jsonData',function($scope,$http){
    $scope.people = [];
    $http({
      method: 'GET',
      url: '/resources/table-content.json'
        }).then(function successCallback(response) {
            $scope.people = response.data["records"];
        }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
});


