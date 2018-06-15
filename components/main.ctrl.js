(function(){
angular.module("App").controller("mainCtrl",function($scope){
	
	$scope.nameFilter = '';
	$scope.priceFilter = '';
	$scope.order = {
		items : [],
		price : 0
	};
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


	$scope.menu = [{
		id:1,
		name:"tomato",
		price:10
	},
	{
		id:1,
		name:"onion",
		price:10
	},
	{
		id:1,
		name:"jalapeno",
		price:10
	},
	{
		id:1,
		name:"noodles",
		price:15
	},
	{
		id:1,
		name:"cheese",
		price:20
	},
	{
		id:1,
		name:"mayo",
		price:30
	},
	
	];
	
})

})()