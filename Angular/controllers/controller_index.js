angular.module("IndexApp",[])

.controller("indexController",function($scope,$resource){
	Post = $resource("http://jsonplaceholder.typicode.com/posts/:id", {id: "@id"});

	$scope.posts = Post.query(); 
});