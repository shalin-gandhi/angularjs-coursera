(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService','UserService'];

function RegistrationController(MenuService,UserService) {
  var reg = this;
  reg.invalidDish = false;
  reg.submit = function () {
    var data = MenuService.getMenuItem(reg.user.favdish);
    data.then(function(response) {
      if(response.id) {
        reg.invalidDish = false;
        UserService.setInfo(reg.user.firstname, reg.user.lastname, reg.user.email, reg.user.phone, reg.user.favdish);
        reg.completed = true;
      }
    })
    .catch(function(response) {
        reg.invalidDish = true;
    });
  };
}

})();
