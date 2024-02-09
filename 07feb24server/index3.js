const http = require('http');
const fs = require('fs');


http.createServer((req,res)=>{
    const data =  fs.readFileSync('example.txt', 'utf-8');
    res.end(data);
}).listen(4000,()=>{
    console.log('server up and running on 4000');
})