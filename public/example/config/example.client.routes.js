angular.module('example').config(['$routeProvider',
function ($routeProvider) {
    $routeProvider.
    when('/',{
        templateUrl: 'example/views/welcome.html'
    }).
    when('/student',{
        templateUrl: 'example/views/example.client.view.html'
    }).
    otherwise({
        redirectTo: '/'
    });
}
]);