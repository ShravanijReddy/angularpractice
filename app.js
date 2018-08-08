angular.module("abc",['ngRoute'])
.config(route)
.filter("file",file)
.directive("testDirective",testDirective)
.controller("arrayctrl",arrayctrl)
.controller("expctrl",expctrl)
.controller("formctrl",formctrl)
.controller("filterctrl",filterctrl)
.controller("httpctrl",httpctrl)
.controller("predefinectrl",predefinectrl)
.controller("predefinectrl1",predefinectrl1)
.controller("customctrl",customctrl)
.controller("preName",preName)
.controller("todoName",todoName)
function todoName(){
	return[];
}
function preName(){
	return{};
}
function route($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "view/array.html"
    })
    .when("/exp", {
        templateUrl : "view/exp.html"
    })
    .when("/form",{
        templateUrl : "view/form.html"
	})
	.when("/filter",{
       templateUrl: "view/filter.html"
	})
	.when("/http",{
		templateUrl: "view/http.html"
	})
	.when("/predefine",{
		templateUrl: "view/predefine.html"
	})
	.when("/predefine1/:predefine1list",{
		templateUrl: "view/predefine1.html"
	})
	.when("/custom",{
		templateUrl: "view/custom.html"
	})
    .otherwise({redirectTo:'/'})
}
function arrayctrl($scope){
	$scope.jasonArray=[];
    $scope.jsonName ='';
    $scope.jasonArray1=[];

	$scope.jsonClick = function(name)
		{
			if(name)
			{
				$scope.jasonArray.push(name);
				var myJSON = JSON.stringify($scope.jasonArray);
				localStorage.setItem("testJSON", myJSON);
				$scope.jsonName="";
			}
			else
				{
					window.alert("Write Something");
				}
		}
    $scope.jsonValue = function()
		{
			var text = localStorage.getItem("testJSON");
			$scope.jasonArray1 = JSON.parse(text);
        }
       
}
 
function expctrl($scope){
}
function formctrl($scope){
}
function  file($scope){


	return function(x) {
        var i, c, txt = "";
		var spaceIndex = x.indexOf(' ')
        for (i = 0; i < x.length; i++) 
		{
			c=x[i]
			if (i != spaceIndex+1)
			{
				c = c.toLowerCase();
			}
			else
			{
				
				c=c.toUpperCase()	
			}
            txt += c;
        }
	
        return txt.replace(/\s/g,''); 
    };
};
function filterctrl($scope){
	var artists =['Pharrel Williams', 'Led Zeppelin', 'Rolling Stones','Rishav Srivastav','Hire Craft'];
}
function httpctrl($scope,$http){
	
	$http.get("https://www.w3schools.com/angular/customers.php").then(function(sucess) {
		console.log(sucess.data.records);
        $scope.val=sucess.data.records;
    }).catch(function(error){
        console.log("error")
    });

}
function predefinectrl($scope){

}
function predefinectrl1($scope,$routeParams,preName){
	 $scope.hi=false;
       console.log($routeParams.predefine1list)
        $scope.headingName=$routeParams.predefine1list;
        if($routeParams.predefine1list == 'hi')
        {
            $scope.hi=true;
        }
       
      } 


    


function customctrl($scope){

}
	function testDirective(){
		return{
			restrict:"A",
			template:"<h1>Made by test directive</h1>"
		}
	}