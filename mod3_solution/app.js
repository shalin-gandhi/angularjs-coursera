(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);


function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItemsList.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'fidc',
    bindToController: true,
    transclude: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var fidc = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var nitd = this;
  nitd.searchTerm = "";
  nitd.found = [];
  nitd.warning = "";

  nitd.getMatchedMenuItems = function() {
    if (nitd.searchTerm == undefined || nitd.searchTerm.trim() == "") {
      nitd.warning = "Nothing found";
      nitd.found = [];
    }
    else {
      var promise = MenuSearchService.getMatchedMenuItems(nitd.searchTerm);
      promise.then(function (response) {
        nitd.found = response;
        if (nitd.found.length)
          nitd.warning = "";
        else
          nitd.warning = "Nothing found";
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });
    }
  };

  nitd.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  };

}


MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  service.foundItems = [];

  service.getMatchedMenuItems = function (searchTerm) {
    service.foundItems = [];
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result) {
      var menuItems = result.data.menu_items;
      for(var i=0; i<menuItems.length; i++) {
          if (menuItems[i].description.indexOf(searchTerm.toLowerCase()) != -1) {
            service.foundItems.push(menuItems[i]);
          }
        }
      return service.foundItems;
    }).catch(function (error) {
      console.log("Something went terribly wrong.");
      return;
    });
  };

  service.removeItem = function (itemIndex) {
    service.foundItems.splice(itemIndex, 1);
  };
}

})();
