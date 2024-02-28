const http = require('http');
const fs = require('fs');

const readableStream = fs.createReadStream('example.txt','utf-8');

http.createServer((req,res)=>{

    if(req.url=='/'){
        readableStream.pipe(res);
    }
}).listen(4000,()=>{
    console.log("running on 4000");
})

