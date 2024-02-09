//reding a file syncchronously

const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    if (req.url == '/'){
        //Synchronously read the content from a file
        try{
            const data = fs.readFileSync('sample.txt','utf8');
            res.end('File content: ' + data);
        }catch(err){
            console.log(err);
            res.end('Internal server error')

        }
    }
});

const port = 4050;

server.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})