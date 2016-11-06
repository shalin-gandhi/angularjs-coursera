(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuItemListController', MenuItemListController);


MenuItemListController.$inject = ['menuItems'];

function MenuItemListController(menuItems) {
  var menuItemList = this;
  menuItemList.items = menuItems.menu_items;
}

})();
