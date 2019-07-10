var fs = require ('fs')
var str = fs.readFileSync(process.argv[2])
console.log(str.toString().split('\n').length-1)
