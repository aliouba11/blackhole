var async=require("./libs/async.js");

var request=require("./libs/request.js");

var config=require("./config.json");
async.map(config.images,request,function(err,results){
	if(err)
		 console.log(err);
	
	var totalsize=0;
	for(var i=0;i<results.length;i++){
		totalsize+=results[i].length();
	}
	
	console.log("All downled file"+totalsize);
});