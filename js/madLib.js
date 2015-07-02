var app = angular.module('madLib', []);
app.controller('controller', ['$scope', function($scope){
  $scope.inputVisable = 'visable';
  $scope.outputVisable  = '';
  $scope.gender = '';

  $scope.submit = function(){
    if( $scope.userSubmit.$valid ) {
      $scope.switch();
    } else {
      alert("Please fill out all of the forms");
    }
  }
  $scope.male = function(){
    $scope.heShe = 'he';
    $scope.himHer = 'him';
  };
  $scope.female = function(){
    $scope.heShe = 'she';
    $scope.himHer = 'her';
  };
  $scope.switch = function(){
    if ($scope.inputVisable){
      $scope.inputVisable = '';
      $scope.outputVisable = 'visable';
    } else {
      $scope.inputVisable = 'visable';
      $scope.outputVisable = '';
    }
  };
  $scope.reset = function(){
    $scope.switch();
    $scope.data.name = '';
    $scope.data.jobTitle = '';
    $scope.data.tediousTask = '';
    $scope.data.dirtyTask = '';
    $scope.data.celebrity = '';
    $scope.data.uselessSkill = '';
    $scope.data.adjective = '';
    $scope.data.obnoxiuousCelebrity = '';
    $scope.data.hugeNumber = '';
  };
}]);
