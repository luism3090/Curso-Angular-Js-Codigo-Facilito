var app = angular.module('mainModule', []);

app.controller('Controller1', ['$scope', function($scope)
{
	$scope.nombre = "Luis Molina 1";
	setTimeout(function()
	{
		//$scope.nombre = "Codigo Facilito";
		//console.log($scope.nombre);
		//$scope.$apply();

		$scope.$apply(function()
		{
			$scope.nombre = "Luis Molina 2";
		});

		document.querySelector("#miBoton").addEventListener("click",function()
		{
			$scope.$apply(function()
			{
				$scope.nombre = "Luis Molina 3";
			});
		});

	},2000);
}])