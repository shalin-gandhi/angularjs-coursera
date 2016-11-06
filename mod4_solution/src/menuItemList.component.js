(function () {
'use strict';

angular.module('MenuApp')
.component('menuItemList', {
  templateUrl: 'src/templates/menuitemlist.template.html',
  bindings: {
    items: '<'
  }
});

})();
