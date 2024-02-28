const http = require('http');
const fs = require('fs');

// http.createServer((req,res)=>{
//     const jsonData = fs.readFileSync('l3data.json','utf-8');
//     //const data = JSON.parse(jsonData);  //no work
//     res.end(data);


// }).listen(4000,()=>{
//     console.log('server up and running on 4000');
// })



//another method

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        //read the json file
        fs.readFile('l3data.json','utf-8',(err,data)=>{
            if(err){
                console.error(err);
                res.end('Interval server error')
                return;
            }
            //set response header
            res.writeHead(200,{'Content-Type': 'application/json'});

            //send json data as plain text
            res.end(data);
        });
    }
    else{
        //handle other routes
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

const port = 3000;
server.listen(port,()=>{
    console.log(`server is ruuning on http://localhost:${port}`);
});
