angular.module('Comparator').service('ServicesManager', ['DummyItemService', function (DummyItemService) {
    var services = [DummyItemService];
    return {
        'loadAllItems' : function () {
            var allItems = [];
            for (var s = 0; s < services.length; s++) {
                angular.extend(allItems, services[s].initLoad());
            }
            return allItems;
        }
    };
}]);
