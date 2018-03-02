
var app = angular.module("app.services", ["ngResource"]);

// app.config(function ($httpProvider) {  
//   $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
//   delete $httpProvider.defaults.headers.common['X-Requested-With'];
// });

/*Getting all area and creating new area*/

app.factory("Areas", function($resource){
	var Areas = $resource("http://localhost:9010/area",{

	},{
	update: {
	  method: "PUT"
	  } 
	})
 return Areas;
})

/*Getting particular area and deleting & updating*/

app.factory("Area", function($resource){
	var area = $resource("http://localhost:9010/area/:id",{
	id: '@id'
	},
	{
	update: {
	  method: "PUT"
	} 
	})
 return area;
})

/*Getting the all items from item manager*/

// app.factory('LAgettingsession', function($resource) {
//     return LAgettingsession = $resource('http://localhost:8005/startlo',{
//       },{
//       update : {
//       method: 'PUT'
//       }
//     });
//     LAgettingsession.prototype.isNew = function() {
//       return (typeof (this.id) === 'undefined');
//     };  
// })