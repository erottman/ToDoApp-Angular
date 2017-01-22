angular.module("todoListApp", [])

.controller('mainCtrl', function ($scope, dataService) {
  $scope.helloConsole = dataService.helloConsole;

  $scope.learningNgChange = function() {
    console.log("An input has cahnged!");
  };

  $scope.todos = [
    {"name" : "clean the house"},
    {"name" : "walk the dog"},
    {"name" : "mow the lawn"},
    {"name" : "pay bills"},
    {"name" : "exercise"},
    {"name" : "swim"}
  ]

})

.service('dataService', function () {

    this.helloConsole = function () {
      console.log('This is the hello console service!');
    }

});
