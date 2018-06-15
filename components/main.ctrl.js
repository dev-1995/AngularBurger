(function(){
angular.module("App").controller("mainCtrl",function($scope,$http){
	
	$scope.nameFilter = '';
	$scope.priceFilter = '';
	$scope.order = {
		items : [],
		price : 0
	};
	$scope.foodItems = [];
	 $http({
      method: 'GET',
      url: 'http://demo9148282.mockable.io/foodItems'
   }).then(function (response){
   			for(var item of response.data)
   			{
   				$scope.foodItems.push(item);
   			}
   },function (error){

   });
	// console.log($scope.foodItems);
	

	$scope.addItem = function(item)
	{
		if($scope.order.items.indexOf(item) < 0)
		{
			$scope.order.items.push(item);
		} 
		
	}
	$scope.updatePrice = function(num)
	{
		$scope.order.price += num;
	}


	$scope.menu = $scope.foodItems;
	
})

})()