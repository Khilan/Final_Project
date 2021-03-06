
angular.module('works').config(['$routeProvider',
function($routeProvider){
    $routeProvider.
    when('/works',{
        templateUrl:'works/views/list-works.client.view.html'
    }).
    when('/workss',{
        templateUrl:'works/views/stulist-works.client.view.html'
    }).
    when('/worked',{
        templateUrl:'example/views/example.client.view.html'
    }).
    when('/works/create',{
        templateUrl:'works/views/create-work.client.view.html'
    }).
    when('/works/:workId',{
        templateUrl:'works/views/view-work.client.view.html'
    }).
    when('/workss/:workId',{
        templateUrl:'works/views/stuview-work.client.view.html'
    }).
    when('/works/:workId/edit',{
        templateUrl:'works/views/edit-work.client.view.html'
    });
 }
]);