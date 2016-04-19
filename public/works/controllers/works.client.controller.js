angular.module('works').controller('WorksController',['$scope',
'$routeParams','$location','Authentication','Works',
function($scope,$routeParams,$location,Authentication,Works){
	$scope.authentication=Authentication;
	
	//create method
	$scope.create=function(){
		var work=new Works({
			company:this.company,
		/*	city:this.city,
            country:this.country,
            position:this.position,
            startdate:this.startdate,
            enddate:this.enddate, */
            details:this.details
		});
	
	work.$save(function(response){
		$location.path('works/'+response._id);
	},function(errorResponse){
		$scope.error=errorResponse.data.message;
	});
	
	};
	
	$scope.enroll=function(){
		$scope.name = "Enroll";
	}
	
	//find and findOne
	$scope.find=function(){
		$scope.works=Works.query();
	};
	$scope.findOne=function(){
		$scope.work=Works.get({
			workId:$routeParams.workId
		});
	};
	//update 
	$scope.update=function(){
		$scope.work.$update(function(){
			$location.path('works/'+$scope.work._id);
		},function(errorResponse){
			$scope.error=errorResponse.data.message;
		});
	};
	
	//delete
	$scope.delete=function(work){
	if(work){
		work.$remove(function(){
			for(var i in $scope.works){
				if($scope.works[i]==work){
					$scope.works.splice(i,1);
				}
			}
		});
	} else{
		$scope.work.$remove(function(){
			$location.path('works');
		});
	}	
	};	
	
}]);