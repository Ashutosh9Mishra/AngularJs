app.factory("myfactory",function($http,$q){
	var object = {};
	object.callServer = function(word){
		console.log("Here i Call Server...");
		var deferObject = $q.defer();
		var url = "http://api.wordnik.com:80/v4/word.json/"+word+"/pronunciations?useCanonical=false&limit=50&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
		$http.get(url).then(success,fail);
		function success(data){
			console.log("Here Comes the Success...")
			deferObject.resolve(data);
		}
		function fail(err){
			deferObject.reject(err);
		}
		return deferObject.promise;
		//return "Hello I calling Server";
	}
	return object;
});