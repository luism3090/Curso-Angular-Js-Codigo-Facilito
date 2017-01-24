var app = angular.module('mainModule', []);

app.filter("mayusculas",function() {
	return function(texto)
	{
		return texto.toUpperCase();
	}
});

app.filter("removeHtml",function() {
	return function(texto)
	{
		return String(texto).replace(/<[^>]+>/gm,''); 
	}
});


app.controller('controllerFiltros', ['$scope', function($scope)
{
	$scope.datos = "Hola Mundo";
	$scope.datos2 = "<p>Hola Mundo</p>";

	$scope.arrayDatos = {};
	$scope.arrayDatos.title = "Hola";
	$scope.arrayDatos.body = "Hola Mundo";

	$scope.moneda = 2;

}]);