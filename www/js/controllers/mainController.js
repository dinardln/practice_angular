app.controller('mainController', ['$scope', '$http' ,'openticket', function($scope, $http, openticket) {
	$scope.tickets = [];
	  $scope.update = function(ticket) {
		$http({
			cache: false,
			url: "https://api.omnivore.io/0.1/locations/yiKpK5Bi/tickets",
			method: "POST",
			headers: {'Api-Key' : "0b94a8f976834586b839c521d22666b3" },
			data: {"employee": ticket.employee_id, "order_type": ticket.order_type, "revenue_center": ticket.revenue_center, "guest_count": 2, "name": "hi", "auto_send": true }
		}).success(function(data) { 
		  $scope.tickets.push(data); 
		}).error(function(err) { 
			  return err; 
		}); 
		console.log($scope.tickets);
	  };
}]);

app.controller('orderController', ['$scope',  function($scope) {                             
    $scope.place_order = function(id) {
		console.log(id);
	 }                                               
}]); 




