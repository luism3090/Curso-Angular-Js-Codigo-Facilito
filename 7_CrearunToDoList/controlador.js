var app = angular.module('app',[]);

app.controller('controlador1', ['$scope', function(s)
{
	s.arrayActivities = [];
	
	s.addActivity = function()
	{
		s.arrayActivities.push(s.newActivity);
		//s.arrayActivities = s.newActivity;

	}

}]);


