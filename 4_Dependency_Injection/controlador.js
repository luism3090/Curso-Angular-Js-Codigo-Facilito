var MyApp = angular.module('MyApp', []);


MyApp.controller('controller1',["$scope",  function(s)
{
	
	s.arrayComentarios = {};

	s.arrayComentarios = 	[
								{
									comentario:"Hola mundo",
									usuario:"Luis"
								},
								{
									comentario:"Hola mundo 3",
									usuario:"Luis 3"
								}
							];


	s.addComent = function()
	{

		//console.log(s.nuevoComentario); 

		s.arrayComentarios.push(s.nuevoComentario);
		s.nuevoComentario = {};

	}


}]);