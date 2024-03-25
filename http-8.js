const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end("Hi this is our live web app")
    }
    else if(req.url === "/about"){
        res.end("Hi this is about page.")
    }
    else res.end(`<h1>Oh No! Seems like this page you are asking for is missing</h1> <a href="/">Go Back Home</a>`)
})
//the req and res are the big big objects in which req contains the infor about the request the client made it contains like url of our website containing subpages etc, and res is object that is used to send response back to the client.

server.listen(3000);