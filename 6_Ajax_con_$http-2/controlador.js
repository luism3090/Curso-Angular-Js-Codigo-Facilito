var mi_app = angular.module('mi_app', []);

mi_app.controller('controllerPosts', ['$scope','$http', function(s,h)
{
	var arrayPosts = {};
	var newPosts = {};

	h.get("https://jsonplaceholder.typicode.com/posts")
	.success(function(data)
	{
		s.arrayPosts = data;

	})
	.error(function()
	{

	});

	s.addPosts = function()
	{
		h.post("https://jsonplaceholder.typicode.com/posts",
		{
			title: s.newPosts.title,
			body: s.newPosts.body,
			userId: 1
		})
		.success(function(data)
		{
			//s.arrayPosts.push(s.newPosts);
			s.arrayPosts.push(data);
			s.newPosts = {};
		})
		.error(function()
		{

		});
	}

}]);