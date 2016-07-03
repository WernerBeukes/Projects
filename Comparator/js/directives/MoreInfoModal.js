angular.module('Comparator.Directives').directive('moreInfoModal', function () {
    return {
        restrict: 'E',
        scope: {
            item: '='
        },
        templateUrl: 'partials/ItemMoreInfoModal.html'
    }
});