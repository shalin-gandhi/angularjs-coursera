(function(){

  angular.module('data')
  .service('MenuDataService',MenuDataService);

  MenuDataService.inject = ['$q', '$http', 'ApiBasePath'];

  function MenuDataService($q, $http, ApiBasePath) {

    var service = this;

    this.getAllCategories = function() {

      var defObj = $q.defer();
      $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      })
      .success(function(data){
        defObj.resolve(data);
      });
      return defObj.promise;
    };

    this.getItemsForCategory = function(categoryShortName) {
      var defObj = $q.defer();
      $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
          category: categoryShortName
        }
      }).success(function(data){
        defObj.resolve(data);
      });
      return defObj.promise;
    };

  }

})();
