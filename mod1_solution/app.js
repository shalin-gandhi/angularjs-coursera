(function () {
'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.name = "";
    $scope.finalMessage = "";
    $scope.fontColor = "";
    $scope.borderColor = "";

    $scope.checkLunch = function () {
      var lunchItems = $scope.name;
      if (lunchItems.trim() == "") {
        $scope.finalMessage = "Please enter data first";
        $scope.fontColor = "text-danger";
        $scope.borderColor = "border-red";
        return;
      }
      lunchItems = lunchItems.split(',');
      var countItems = lunchItems.length;
      for (var i=0; i<lunchItems.length; i++) {
        if (lunchItems[i].trim() == "")
          countItems = countItems - 1;
      }
      if (countItems <= 3 && countItems > 0) {
        $scope.finalMessage = "Enjoy!";
        $scope.fontColor = "text-success";
        $scope.borderColor = "border-green";
      }
      else if (countItems > 3) {
        $scope.finalMessage = "Too much!";
        $scope.fontColor = "text-success";
        $scope.borderColor = "border-green";
      }
      else {
        $scope.finalMessage = "Please enter data first";
        $scope.fontColor = "text-danger";
        $scope.borderColor = "border-red";
      }
    };
  }
})();
