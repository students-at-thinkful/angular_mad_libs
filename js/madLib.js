var app = angular.module('madLib', []);
app.controller('controller', ['$scope', function($scope){
  // $scope.heShe = 'she';
  // $scope.himHer = 'her';
  // $scope.name = 'Name';
  // $scope.jobTitle = 'Job Title';
  // $scope.tediousTask = 'Tedious Task';
  // $scope.dirtyTask = 'Dirty Task';
  // $scope.celebrity = 'Celebrity';
  // $scope.uselessSkill = 'Useless Skill';
  // $scope.adjective = 'Adjective';
  // $scope.obnoxiuousCelebrity = 'Obnoxiuous Celebrity';
  // $scope.hugeNumber = 'Huge Number';
  $scope.inputVisable = 'visable';
  $scope.outputVisable  = '';
  $scope.gender = '';

  $scope.male = function(){
    $scope.check = "male"
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
}]);
