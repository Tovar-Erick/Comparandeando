'use strict';


angular.module('ComparandeandoApp')
  .controller('ProductCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      $scope.algo="hola";
    });
  });
