angular.module('myApp', ['ngRoute'])
.directive('hello', [function() {
  return {
    restrict: 'CEMA', // C: class, E: element, M: comments, A: attributes
    replace: true, // replaces original content with template
    template: '<span><br>Hello</span'
  };
}])
.controller('TodoController', ['$scope', function ($scope) {
  $scope.todos = [
    { name: 'Do Dishes', completed: false },
    { name: 'Do Laundry', completed: false },
    { name: 'Learn Angular', completed: true },
    { name: 'Write Notes', completed: false },
    { name: 'Do Assignments', completed: false },
    { name: 'Be awesome!', completed: false },
  ];
}])
.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '/todos.html',
    controller: 'TodoController'
  });
}]);
