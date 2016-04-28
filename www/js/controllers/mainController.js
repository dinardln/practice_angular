app.controller('mainController', ['$scope', '$http' ,'$window', function($scope, $http, $window) {
	apiKey =  "0b94a8f976834586b839c521d22666b3";
	$scope.num_tickets = 0
	$scope.open_ticket = function(ticket) {
		$scope.num_tickets++;
		$http({
			cache: false,
			url: "https://api.omnivore.io/0.1/locations/yiKpK5Bi/tickets",
			method: "POST",
			headers: {'Api-Key' : apiKey },
			data: {"employee": ticket.employee_id, "order_type": ticket.order_type, "revenue_center": ticket.revenue_center, "guest_count": 2, "name": $scope.num_tickets.toString(), "auto_send": false }
		}).success(function(data) { 
		  $scope.show_tickets();
		  $window.location.href = "#showtickets";
		}).error(function(err) { 
		    return err; 
		}); 
	};

	$scope.show_tickets = function() {
		$http.get('https://api.omnivore.io/0.1/locations/yiKpK5Bi/tickets?limit=5&where=eq(open,true)', {headers:{'Api-Key' : apiKey }}).success(function(data) { 
				$scope.tickets = data._embedded.tickets;
            }) 
            .error(function(err) { 
              return err; 
            });
	}

	$scope.close_order = function(id) {
		console.log("here")
		$http({
			cache: false,
			url: "https://api.omnivore.io/0.1/locations/yiKpK5Bi/tickets/"+id,
			method: "POST",
			headers: {'Api-Key' : apiKey },
			data: {"void": true }
		}).success(function(data) { 
		  $scope.show_tickets();
		}).error(function(err) { 
		    return err; 
		}); 
	}

	$scope.show_tickets();
}]);





