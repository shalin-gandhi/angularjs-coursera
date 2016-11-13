(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['userInfo','MenuService','ApiPath'];

function MyInfoController(userInfo,MenuService,ApiPath) {
  var info = this;
  info.basePath = ApiPath;
  info.userInfo = userInfo;
  info.isRegistered = false;
  if(angular.equals(({}),userInfo))
    info.isRegistered = false;
  else {
    info.isRegistered = true;
  }
  if (info.isRegistered) {
    var data = MenuService.getMenuItem(userInfo.favdish);
    data.then(function(response) {
       info.itemInfo = response;
    });
  }
};
})();
