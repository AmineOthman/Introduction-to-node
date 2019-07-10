var mymodule = require ('./ex6mod');

var ext = process.argv[3];
var dir = process.argv[2];

var callback = function(err,data){
    if(err){return err}
    
    for (let i=0;i<data.length; i++){
        console.log(data[i]);
    }
}
mymodule(dir,ext,callback);