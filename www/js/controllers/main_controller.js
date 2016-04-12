app.controller('main_controller', ['$scope','ticket', function($scope, ticket) {
	ticket.success(function(data) {
		console.log(data);
    	$scope.fiveDay = data;
  	});
  	$scope.master = {};
      $scope.update = function(ticket) {
        $scope.master = angular.copy(ticket);
        console.log($scope.master);
      };
}]);


