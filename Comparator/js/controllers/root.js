angular.module('Comparator').controller('RootController', ['$scope', 'ServicesManager', function ($scope, ServicesManager) {
    $scope.items = ServicesManager.loadAllItems();
    $scope.compareItems = [];
    
    $scope.addToQueue = function (item) {
        $scope.compareItems.push(item);
    };

    $scope.removeFromQueue = function (item) {
        $scope.compareItems.splice(, 1)
    }
}]);