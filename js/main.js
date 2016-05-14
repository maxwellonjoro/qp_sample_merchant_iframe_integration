/**
* Main AngularJS Web Application
*/
var app = angular.module('MerchantApp', []);

app.controller('MerchantController', ['$scope','$sce',function($scope,$sce) {
      $scope.QPUrl = $sce.trustAsResourceUrl("http://localhost/qp2");
}]);

