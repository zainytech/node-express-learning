const fs = require('fs');

console.log("before starting task")

fs.readFile('./content/first.txt','utf8',(err,res)=>{
    if(err){
        console.log(err);
    } else {
        console.log(res);
    }
console.log("after completing task")

})
console.log("Next task")
