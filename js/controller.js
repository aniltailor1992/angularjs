var app = angular.module('app.controllers', []);

/*Controller for getting all areas*/

app.controller('AreaCtrl', ['$scope','Areas','Area', function($scope,Areas,Area){
	$scope.areas= Areas.query();

	$scope.delete = function(area){
		$scope.areas.splice($scope.areas.indexOf(area),1);
		Area.delete({id: area.id});
	}
}])

/*deleting & editing particular area*/

app.controller('EditareaCtrl',['$scope', 'Area','$stateParams','Areas', function($scope,Area,$stateParams,Areas){

	$scope.areaid = $stateParams.id;
	
	if(typeof($scope.areaid)==='undefined')
	{
		$scope.area = new Areas();
	}else{
		$scope.area = Area.get({
			id: $scope.areaid
		})
	}

	$scope.save = function(id){
		if(id==1)
		{

			$scope.area.$save();
		}else{
			$scope.area.$update();
		}
	}
}]);