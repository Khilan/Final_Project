angular.module('example').config(['$routeProvider',
function ($routeProvider) {
    $routeProvider.
    when('/',{
        templateUrl: 'example/views/empexample.client.view.html'
    }).
    otherwise({
        redirectTo: '/'
    });
}
]);