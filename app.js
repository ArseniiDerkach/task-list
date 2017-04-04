var app = angular.module('Orders', []);
app.controller('AddOrderController', function($scope) {
    $scope.managers = ["Менеджер 1", "Менеджер 2", "Менеджер 3", "Менеджер 4"];
    $scope.types= ["Опт", "Розница"];
});
