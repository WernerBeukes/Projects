angular.module('Comparator.Directives').directive('itemPane', ['$rootScope', function ($rootScope) {
    return {
        restrict: 'E',
        scope: {
            item: '=',
            addToCompare: '&',
            removeFromCompare: '&'
        },
        templateUrl: 'partials/ItemPanePartial.html'
    }
}]);