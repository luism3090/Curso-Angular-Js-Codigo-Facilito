var App = angular.module("My_App",[]);

App.controller("comentar",function($scope)
{
	$scope.nuevoComentario = {};
	$scope.arrayComentarios = {};

	$scope.arrayComentarios = 
							[
								{
									comentario: "Hola mundo",
									usuario:"Luis"
								},
								{
									comentario: "Hola mundo 2",
									usuario:"Luis 2"
								}
							];

	$scope.agregarComentario = function()
	{
		var comentario = $scope.nuevoComentario.comentario;
		var usuario = $scope.nuevoComentario.usuario;

			$scope.arrayComentarios.push($scope.nuevoComentario);

			$scope.nuevoComentario = {};
	}

});