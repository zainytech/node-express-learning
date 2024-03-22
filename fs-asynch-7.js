//Asynchronous function giving us famous callback-hell
const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf8' , (err,result)=>{
    if(err){
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.lof(err);
            return;
        }
        const second = result; 
        writeFile('./content/resultAsync.txt',`Result:${first} ${second}`, (err,result)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log("async file created",result)
        }) //flag is an option opobject that is used to not overwrite file completely but append the new result into it.
    })
})