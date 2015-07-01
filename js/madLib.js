var app = angular.module('madLib', []);
app.controller('controller', ['$scope', function($scope){
  $scope.femaleName = 'Female Name';
  $scope.jobTitle = 'Job Title';
  $scope.tediousTask = 'Tedious Task';
  $scope.dirtyTask = 'Dirty Task';
  $scope.celebrity = 'Celebrity';
  $scope.uselessSkill = 'Useless Skill';
  $scope.adjective = 'Adjective';
  $scope.obnoxiuousCelebrity = 'Obnoxiuous Celebrity';
  $scope.hugeNumber = 'Huge Number';
}]);
