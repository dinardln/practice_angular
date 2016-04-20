app.controller('mainController', ['$scope', '$http' ,'$window', function($scope, $http, $window) {
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
      };
}]);

app.controller('orderController', ['$scope', '$http','$window', function($scope, $http, $window) {
    $scope.items = [];
    apiKey = "0b94a8f976834586b839c521d22666b3";
    $scope.showorders = function(id) {
    	$scope.id = id;
      	//console.log(id);
    	$http({
			cache: false,
			url: 'https://api.omnivore.io/0.1/locations/yiKpK5Bi/tickets/'+id+'/items',
			method: "GET",
			headers: {'Api-Key' : apiKey },
		}).success(function(data) { 
			//console.log(data);
          	$scope.items.push(data);
          	$window.location.href = "/js/views/order.html";	 
        }).error(function(err) { 
              return err; 
        });  
    }

    $scope.placeorder = function(order_id) {
    	$http.get('https://api.omnivore.io/0.1/locations/yiKpK5Bi/menu/items/'+$order_id , {headers:{'Api-Key' : apiKey }}).success(function(data) { 
			  console.log(data);
              $scope.item_info = data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
  //   	$http({
		// 	cache: false,
		// 	url: 'https://api.omnivore.io/0.1/locations/yiKpK5Bi/tickets/'+$scope.id+'/items',
		// 	method: "POST",
		// 	headers: {'Api-Key' : apiKey },
		// 	data: {"menu_item": ticket.employee_id, "quantity": ticket.order_type, "price_level": ticket.revenue_center, "comment": , "modifiers": []}
		// }).success(function(data) { 
  //         $scope.tickets.push(data); 
  //       }).error(function(err) { 
  //             return err; 
  //       }); 
    }


     
}]);




