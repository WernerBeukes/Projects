angular.module('Comparator.Services').service('DummyItemService', ['ObjectFactory', function (ObjectFactory) {
    return {
        'initLoad' : function () {
            var items = [];
            for (var i = 0; i < 25; i++) {
                items.push(ObjectFactory.mapDummyItem('Item'+i, '', 'Item'+i, 'Item'+i, '$123.45', i%6, false));
            }
            return items;
        },
        'search' : function (term) {
            return [];
        }
    };
}]);