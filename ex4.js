var fs = require('fs')
var str = fs.readFile(process.argv[2],(err,data)=>{
    if (err){
        console.log('err')
    }else{
        console.log(data.toString().split('\n').length-1)
    }
})