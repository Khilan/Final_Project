angular.module('example').config(['$routeProvider',
function ($routeProvider) {
    $routeProvider.
    when('/',{
        templateUrl: 'example/views/welcome.html'
    }).
    otherwise({
        redirectTo: '/'
    });
}
]);