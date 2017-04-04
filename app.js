var app = angular.module('Orders', []);

app.controller('AddOrderController', function($scope) {
  $scope.data = {
      managers: ["Менеджер 1",
      "Менеджер 2",
      "Менеджер 3",
      "Менеджер 4"],
      types: [
        "Опт",
        "Розница"
      ],
  };


});

function AddOrderController() {
  $this.managers = [
    "Менеджер 1",
    "Менеджер 2",
    "Менеджер 3",
    "Менеджер 4"
  ];
    $this.types = [
      "Опт",
      "Розница"
    ];
    $this.orders = [{}];
}

AddOrderController.prototype = {
  addOrder: function() {
    orders.push({
      date: this.addOrderDate,
      manager: this.addOrderManager,
      type: this.addOrderType,
      buyer: this.addOrderBuyer,
      deliver: this.addOrderDeliver,
      till: this.addOrderTill,
    })
    this.addOrderDate = '';
    this.addOrderManager = '';
    this.addOrderType = '';
    this.addOrderBuyer = '';
    this.addOrderDeliver = '';
    this.addOrderTill = '';
  }
}
