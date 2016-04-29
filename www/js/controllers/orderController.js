app.controller('orderController', ['$scope', '$routeParams', '$http','$window', function($scope, $routeParams, $http, $window) {
	$scope.ticket_id = $routeParams.ticketId;
    apiKey = "0b94a8f976834586b839c521d22666b3";
    $scope.show_orders = function() {
    	$http({
			cache: false,
			url: 'https://api.omnivore.io/0.1/locations/yiKpK5Bi/tickets/'+$scope.ticket_id+'/items',
			method: "GET",
			headers: {'Api-Key' : apiKey },
		}).success(function(data) { 
          	$scope.items = data._embedded.items;
        }).error(function(err) { 
              return err; 
        });  
    }

    $scope.place_order = function(order_id) {
      console.log($scope.ticket_id);
    	$http.get('https://api.omnivore.io/0.1/locations/yiKpK5Bi/menu/items/'+order_id , {headers:{'Api-Key' : apiKey }}).success(function(data) { 
              $scope.item_info = data;
              $http({
				cache: false,
				url: 'https://api.omnivore.io/0.1/locations/yiKpK5Bi/tickets/'+$scope.ticket_id+'/items',
				method: "POST",
				headers: {'Api-Key' : apiKey },
				data: {"menu_item": order_id, "quantity": 1, "price_level": $scope.item_info.price_levels[0].id, "comment": "order of " + $scope.item_info.name , "modifiers":[]}
			}).success(function(data) {
	          $scope.items.push(data);
            $scope.show_orders(); 
            $window.location.href = '#showorders/'+$scope.ticket_id;
	        }).error(function(err) { 
	              return err; 
	        }); 
        }) 
        .error(function(err) { 
          return err; 
        }); 
    	
    }
    $scope.show_orders();
    


     
}]);
