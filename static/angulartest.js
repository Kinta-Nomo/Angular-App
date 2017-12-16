window.addEventListener('hashchange', function(){
    alert(window.location.hash)
    //easter eggs!
    if (window.location.hash == "#1"){
        alert("simple huh")
    }
    else if (window.location.hash == "#2"){
        alert("No more than this tho.")
    }
    else if (window.location.hash == "#Banana"){
        alert("You seems to be cool.")
    }
    else if (window.location.hash == "#3.14159265359" || window.location.hash == "#1.41421356237" || window.location.hash == "2.71828182846"){
        alert("Math huh!")
    }
},false)

var singer = "michael";

freddie.Callname()

freddie.singername = singer
freddie.Callname()

var myApp = angular.module("myApp",['ngMessages'])

myApp.config(['$interpolateProvider', function($interpolateProvider) {
  $interpolateProvider.startSymbol('[[');
  $interpolateProvider.endSymbol(']]');
}]);

myApp.controller("maincontroller",['$scope','$log','$timeout','$filter','$location',function($scope,$log,$timeout,$filter,$location){
    $scope.iname = "iphone"
    $scope.formattedname = $filter("uppercase")($scope.iname)
    $scope.year = 1997
    $scope.color = "purple"
    $scope.TurnStat = "Off"
    
    $scope.Homebutton = function(){
        $scope.TurnStat = "On"
        return $scope.TurnStat
    }
    
    console.log($scope)
    $log.info($location.path()+'hi')
    
    $log.info("This website is made with Cloud9...")
    $log.warn("Well, nothing really happend.")
    $log.error("Eat Banana!")
    $log.debug("~Debug access 100% complete ~Proccessing Debug.. ~Debug complete. Banana malware was found from the website ~Aware of the malware from accessing debug mode")
    
    $timeout(function(){
        $scope.color = "oops. wrong color"
        $timeout(function(){
            $scope.color = "red"
        },3000)
    },3000)
    
    $scope.handle = ''
    $scope.handleclean = function(){
        if ($scope.handle.length < 771){
            if ($scope.handle != '' ){
                return $filter('uppercase')($scope.handle[0]) + $filter('lowercase')($scope.handle).substring(1);
            }else{
                return ''
            }
        }else{
            return ''
        }
    }
    
    // $scope.$watch("handle",function(newV,oldV){
    //     $log.warn(oldV)
    //     $log.error(newV)
    // })
    
    setTimeout(function(){
        if ($scope.handle == ''){
            $scope.handle = "please type in something....!!!"
        }
    },10000)
    
    $scope.rules = [{rulename:"No anti-banana weapon/group/individual"},
                    {rulename:"Banana/Angular passport requirement"},
                    {rulename:"Hacking through this website is strictly not permitted"}]
                    
    $scope.alertClick = function(){
        alert("clicked!")
    }
}])

myApp.controller("secondcontroller",["$scope","$log",function($scope,$log){
    
    $scope.name = "I'm another controller"

    
}])


//myApp.controller("maincontroller",[$scope,$log,function(blahblah,lalalala){
//  lalalala.log(blahblah)
//}])

//
var Element = function(Name,SF,Num,Np,Nn,Ne){
    this.Name = Name
    this.SF = SF
    this.Num = Num
    this.Np = Np
    this.Nn = Nn
    this.Ne = Ne
}

console.log("class 'Element' needs:" + angular.injector().annotate(Element))

function createElement(Element){
    console.log(Element)
}
var Kentanium = new Element("Kentanium","Kt",104,93,124,15)
createElement(Kentanium)
//

var tb = document.getElementById("myTextBox")
tb.addEventListener("keypress",function(){
    console.log("typed")
})