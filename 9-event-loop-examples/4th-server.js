const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("request going");
    res.end('Checking Example of event loops');

})

server.listen(3000,()=>{
    console.log("server listening on port")
})

//both console.log's are in callback function but accoring to first in first out rule still request going will not print first because it have a condition(on receiving a request from client) which will fullfill first then that consol.log will be executed by the event loop.