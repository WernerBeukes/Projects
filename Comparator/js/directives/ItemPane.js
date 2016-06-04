angular.module('Comparator').directive('itemPane', function () {
    return {
        restrict: 'E',
        scope: {
            item: '='
        },
        templateUrl: 'partials/ItemPanePartial.html'
    }
});