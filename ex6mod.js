var fs = require('fs');
var path = require ('path');

module.exports = function(dir,ext,cb){

    var arr=[];
    
    fs.readdir(dir,function callback(err,data){
        if (err) {return cb(err)}
    
        for (let i = 0;i < data.length; i++){
            var x = data[i];
    
            if(path.extname(x) == "."+ext){
                arr.push(x);
            }
        }
       
        return cb(null,arr);
    
    })

}