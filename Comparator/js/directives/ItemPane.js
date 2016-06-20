angular.module('Comparator').directive('itemPane', ['$rootScope', function ($rootScope) {
    return {
        restrict: 'E',
        scope: {
            item: '=',
            addToCompare : '&',
            removeFromCompare : '&'
        },
        link: function (scope) {
            scope.addToCompare = function () {
                scope.addToQueueFunction(scope.item);
            };
            
            scope.removeFromCompare = function () {
                
            };
        },
        templateUrl: 'partials/ItemPanePartial.html'
    }
}]);