app.factory('ticket', ['$http',  function($http) { 
	apiKey = "0b94a8f976834586b839c521d22666b3";
	
    return $http.get('https://api.omnivore.io/0.1/locations/yiKpK5Bi/tickets', {headers:{'Api-Key' : apiKey }})
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);