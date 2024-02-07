const http = require('http');
//http.createServer().listen(4000);
http.createServer((req,res)=>{
    res.end("Hi");
}).listen(4000);
