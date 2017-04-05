var app = angular.module('Orders', []);

app.controller('orderController', function($scope, $http) {
  $scope.data = {
      managers: ["Менеджер 1",
      "Менеджер 2",
      "Менеджер 3",
      "Менеджер 4"],
      types: [
        "Опт",
        "Розница"
      ]
  },
  // $scope.orders = [
  // {
  //   date: '21.11.2017',
  //   manager: 'Менеджер 2',
  //   type: 'Розница',
  //   buyer: 'Магазин',
  //   deliver: 'Склад',
  //   till: '30.11.2017',
  // }]
  $http.get('orders.json').then(function(data) {
    console.log(data.data[0]);
    $scope.orders = data.data;
  }),
  $scope.normalDate = function(isoDate) {
    var year = isoDate.getFullYear();
    var month = isoDate.getMonth()+1;
    var day = isoDate.getDate();
    if (day<10) {
      day = '0'+day;
    };
    if (month<10) {
      month= '0'+month;
    };
    var date = day+'.'+month+'.'+year;
    return date;
  };
  $scope.addOrder = function() {
    $scope.orders.push({
      date: $scope.normalDate($scope.addOrderDate),
      manager: $scope.addOrderManager,
      type: $scope.addOrderType,
      buyer: $scope.addOrderBuyer,
      deliver: $scope.addOrderDeliver,
      till: $scope.normalDate($scope.addOrderTill),
    });
    $scope.addOrderDate = '';
    $scope.addOrderManager = '';
    $scope.addOrderType = '';
    $scope.addOrderBuyer = '';
    $scope.addOrderDeliver = '';
    $scope.addOrderTill = '';
  }
  console.log(angular.toJson($scope.orders));
});

// function orderController($scope) {
//
// }
//
// orderController.prototype = {
//
// }

// var app = angular.module('todo', []);
//
// app.controller('TodoCtrl', function($scope) {
//     $scope.todos = [
//         {text:'Learn AngularJS', done:false},
//         {text:'Build an app', done:false}
//     ];
//
//     $scope.getTotalTodos = function () {
//         return $scope.todos.length;
//     };
//
//     $scope.addTodo = function () {
//         $scope.todos.push({text:$scope.formTodoText, done:false});
//         $scope.formTodoText = '';
//     };
// });
