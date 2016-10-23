(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tbc = this;

  tbc.toBuyItems = ShoppingListCheckOffService.getToBuyItems();

  tbc.transferItem = function (itemIndex) {
    ShoppingListCheckOffService.transferItem(itemIndex);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var abc = this;

  abc.alreadyBoughtItems = ShoppingListCheckOffService.getAlreadyBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var toBuyItems = [
    {
      name : "Cookies",
      quantity : 10
    },
    {
      name : "Chips",
      quantity : 10
    },
    {
      name : "Chocolate",
      quantity : 15
    },
    {
      name : "Donuts",
      quantity : 8
    },
    {
      name : "Pepto Bismol",
      quantity : 5
    }
  ];
  var alreadyBoughtItems = [];

  service.transferItem = function (itemIndex) {
    alreadyBoughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getAlreadyBoughtItems = function () {
    return alreadyBoughtItems;
  };
}

})();
