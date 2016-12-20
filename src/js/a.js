require("../css/a.css");	
require("../css/b.css");
var dObj=require('./d.js');
require('./jquery.easing.min.js');
dObj.init();
require.ensure([],function(){
	require("b");
	console.log(jQuery.easing);
},'b');
require.ensure([],function(){
	require("c");
	alert("$");
},'c');