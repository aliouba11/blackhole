var http=require("http");

var request=function(data,callback){
	if(!data.url)
		return callback(new Error("Insert image url in data.url"));
	console.log("Start"+data.url);
	
	http.get(data.url,function(response){
		var body="";
		
		response.on('data',function(d){
			body+=d;
		});
		
		
		response.on('end',function(){
			console.log("Finish",data.url,"sze:"+body.length);
			return callback(null,body);
		});
		
	}).on('error',function (e){
		console.log("Get error "+e.message);
	});
};


module.exports=request;