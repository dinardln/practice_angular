app.directive('homeNav', function() { 
  return { 
	restrict: 'E', 
	scope: { 
	  info: '=' 
	}, 
	templateUrl: 'js/directives/homeNav.html' 
  }; 
});

app.directive('orderNav', function() { 
  return { 
  	scope: true,
	restrict: 'E', 
	scope: { 
	  ticket: '=' 
	}, 
	templateUrl: 'js/directives/orderNav.html' 
  }; 
});