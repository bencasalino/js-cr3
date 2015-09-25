// controller for students who have signed in 
LogIn.controller("WhoIsHereCtrl", function WhoIsHereCtrl($scope, StudentFactory){
  $scope.students = StudentFactory.students;
  $scope.StudentFactory = StudentFactory;
});
