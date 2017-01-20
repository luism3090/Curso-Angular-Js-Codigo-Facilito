var app = angular.module("My_app",["LocalStorageModule"]);

app.controller('controller1', ['$scope','localStorageService', function(s,localStorageService)
{


	if(localStorageService.get("myNewList")) 
	{
		 s.arrayList = localStorageService.get("myNewList");
	}
	else
	{
		s.arrayList = [];
	}



	s.$watchCollection("arrayList",function()
	{
		alert();
		localStorageService.set("myNewList",s.arrayList);
	});
	
	s.addList = function()
	{
		

		if(( s.newList.actividad != undefined && s.newList.actividad.trim() != "" ) && s.newList.fecha != undefined)
		{
			s.arrayList.push(s.newList);
			s.newList = {};
			//localStorageService.set("myNewList",s.arrayList);
		}
		
	
		
	}

	s.clearList = function()
	{
		s.arrayList = [];
		//localStorageService.set("myNewList",s.arrayList);
	}

}]);