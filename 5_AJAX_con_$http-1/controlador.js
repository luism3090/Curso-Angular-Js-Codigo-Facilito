var app = angular.module('Mi_App', []);

app.controller('c1', ['$scope','$http', function(s,h)
{
	s.arrayPosts = [];

	h.get("https://jsonplaceholder.typicode.com/posts")
	.success(function(data)
	{
		s.arrayPosts = data;
	})
	.error(function(err)
	{

	});

}]);