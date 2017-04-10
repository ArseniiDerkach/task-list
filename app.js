var app = angular.module('Orders', []);

app.controller('orderController', function($scope, $http, $filter) {
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
	$scope.today= new Date();
	$scope.deadline = new Date();
	$scope.deadline.setDate($scope.deadline.getDate() + 3);
	$scope.saved = localStorage.getItem('orders') ? localStorage.getItem('orders') : null;
	if (($scope.saved !== null) && ($scope.saved !== "undefined")) {
		$scope.orders = JSON.parse($scope.saved)
	} else {
		$http.get('orders.json').then(function(data) {
			$scope.orders = data.data;
		})
	};
	console.log($scope.orders);
	localStorage.setItem('orders', JSON.stringify($scope.orders));
	$scope.currentPage = 'main page';
	$scope.addPage = function () {
		$scope.currentPage = 'add orders page';
	},
	$scope.listPage = function () {
		$scope.currentPage = 'list orders page';
	},
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
	},
	$scope.addOrder = function() {
		var date = $scope.normalDate($scope.addOrderDate);
		var type = $scope.addOrderType;
		$scope.orders.push({
			date: $scope.addOrderDate,
			manager: $scope.addOrderManager,
			type: $scope.addOrderType,
			buyer: $scope.addOrderBuyer,
			deliver: $scope.addOrderDeliver,
			till: $scope.addOrderTill,
			id: type.substr(0,1)+'-'+date.substr(8,2)+date.substr(3,2)+date.substr(0,2)+$scope.orders.length,
			editorEnabled: false,
		});
		$scope.addOrderDate = '';
		$scope.addOrderManager = '';
		$scope.addOrderType = '';
		$scope.addOrderBuyer = '';
		$scope.addOrderDeliver = '';
		$scope.addOrderTill = '';
		localStorage.setItem('orders', JSON.stringify($scope.orders));
	},
	$scope.isEdited = function(curDate) {
		var curDateMedium = $filter('date')(curDate, 'dd.MM.yyyy');
		var till = new Date(curDate);
		if (till > $scope.deadline) {
			return true;
		} else {
			return false;
		};
	},
	$scope.edit = function (order) {
		$scope.editorEnabled = true;
		$scope.editOrderDate = new Date(order.date);;
		$scope.editOrderManager = order.manager;
		$scope.editOrderType = order.type;
		$scope.editOrderBuyer = order.buyer;
		$scope.editOrderDeliver = order.deliver;
		$scope.editOrderTill = new Date(order.till);
		$scope.index = $scope.orders.indexOf(order);
	},
	$scope.cancel = function () {
		$scope.editorEnabled = false;
	},
	$scope.save = function (index) {
		$scope.orders[index].date = $scope.editOrderDate;
		$scope.orders[index].manager = $scope.editOrderManager;
		$scope.orders[index].type = $scope.editOrderType;
		$scope.orders[index].buyer = $scope.editOrderBuyer;
		$scope.orders[index].deliver = $scope.editOrderDeliver;
		$scope.orders[index].till = $scope.editOrderTill;
		var year = $scope.editOrderDate.getFullYear().toString().substr(2,2);
		var month = $scope.editOrderDate.getMonth()+1 < 10 ? '0'+($scope.editOrderDate.getMonth()+1) : $scope.editOrderDate.getMonth()+1;
		var day = $scope.editOrderDate.getDate()+1 < 10 ? '0'+$scope.editOrderDate.getDate() : $scope.editOrderDate.getDate();
		$scope.orders[index].id = $scope.editOrderType.substr(0,1)+'-'+year+month+day+(++index);
		$scope.editorEnabled = false;
		localStorage.setItem('orders', JSON.stringify($scope.orders));
	}
});