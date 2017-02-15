var Async=function(){

this.map=function(array,func,callback){
	
	//array->images
	//funct ->downloadImage
	//callback ->function anonyme
	
	var count = array.length;
	var errors =[];
	var results=[];
	
	for(var i=0;i<array.length;i++){
		func(array[i],function(error,result){
			count--;
			if(error)
				errors[i]=error;
			else
				results[i]=result;
			
			//une fois que l'on ai fini de télécharger les images apel de la fonction callback
			if(count<1)
				return callback(errors.length>0?errors:null,results);
		});
	}
};
};


module.exports=new Async();