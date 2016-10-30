app.controller('MainController', ['$scope', '$http', function($scope, $http) {

	$scope.getSubreddit = function(subreddit) {
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", theUrl, false);
		xmlHttp.send(null);
		$scope.content = xmlHttp.responseText;
	};

}]);
