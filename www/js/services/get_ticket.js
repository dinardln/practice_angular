app.factory('openticket', ['$http',  function($http) { 
	var newObj = new Object();
	newObj.run_func = function(ticket_info) {
		console.log("hi");
		console.log(ticket_info);
		apiKey = "0b94a8f976834586b839c521d22666b3";
		$http.get('https://api.omnivore.io/0.1/locations/yiKpK5Bi/tickets', {headers:{'Api-Key' : apiKey }}).success(function(data) { 
			//console.log(data);
              newObj.data = data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
	}
	return newObj;
}]);

