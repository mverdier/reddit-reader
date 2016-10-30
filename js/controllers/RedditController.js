app.controller('MainController', ['$scope', '$http', function($scope, $http) {

	$scope.getSubreddit = function(subreddit) {
		$http.get("http://reddit.com/r/" + subreddit + ".json")
		.then(function(response) {
			$scope.content = response.data;
		});
	};

}]);
