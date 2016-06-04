angular.module('Comparator').controller('RootController', ['$scope', 'ServicesManager', function ($scope, ServicesManager) {
    $scope.items = ServicesManager.loadAllItems();
}]);