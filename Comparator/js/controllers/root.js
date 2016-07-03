angular.module('Comparator').controller('RootController', ['$scope', 'ServicesManager', function ($scope, ServicesManager) {
    $scope.items = ServicesManager.loadAllItems();
    $scope.compareItems = [];
    $scope.moreInfoItem = $scope.items[0];
    
    $scope.listControls = {
        addToQueue: function (item) {
            console.log(item.Name);
        },
        removeFromQueue: function (item) {
            console.log("Remove");    
        }
    };
}]);