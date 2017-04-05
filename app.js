var app = angular.module('Orders', []);

app.controller('orderController', function($scope) {
  $scope.data = {
      managers: ["Менеджер 1",
      "Менеджер 2",
      "Менеджер 3",
      "Менеджер 4"],
      types: [
        "Опт",
        "Розница"
      ],
      orders: [
      {
        date: '21.11.2017',
        manager: 'Менеджер 2',
        type: 'Розница',
        buyer: 'Магазин',
        deliver: 'Склад',
        till: '30.11.2017',
      }]
  };


});

function orderController() {
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

orderController.prototype = {
  addOrder: function() {
    orders.push({
      date: this.addOrderDate,
      manager: this.addOrderManager,
      type: this.addOrderType,
      buyer: this.addOrderBuyer,
      deliver: this.addOrderDeliver,
      till: this.addOrderTill,
    });
    console.log(order);
    this.addOrderDate = '';
    this.addOrderManager = '';
    this.addOrderType = '';
    this.addOrderBuyer = '';
    this.addOrderDeliver = '';
    this.addOrderTill = '';
  }
}