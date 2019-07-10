var fs = require('fs');
var path = require ('path');

var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir,(err,data)=>{
    if (err){console.log(err)}

    for (let i = 0;i < data.length; i++){
        var x = data[i];

        if(path.extname(x) == "."+ext){
            console.log(x);
        }
    }

})