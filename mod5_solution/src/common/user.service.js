(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService() {
  var service = this;
  service.user = {};

  service.setInfo = function(firstname, lastname, email, phone, favdish) {
    service.user.firstname = firstname;
    service.user.lastname = lastname;
    service.user.email = email;
    service.user.phone = phone;
    service.user.favdish = favdish;
  }

  service.getInfo = function() {
    return service.user;
  }

};

})();
