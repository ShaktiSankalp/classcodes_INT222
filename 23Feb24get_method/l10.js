const http = require('http');
const fs = require("fs");
const querystring = require('querystring');
const url = require("url");

http.createServer((req,res)=>{
    let parsedUrl= url.parse(req.url,true);
    console.log(parsedUrl);
    const pathname = parsedUrl.pathname;
    if(pathname =="/"){
        fs.readFile('l10form.html',(err,data)=>{
            if(err){
                console.log(err);
                res.end("Error while displaying form");
            }else{
                res.end(data);
            }
        })
    }
    else if(pathname =='/submit'){
        let name = parsedUrl.query.name;
        let email = parsedUrl.query.email;

        let data = "name = "+name + " email = " + email;

        fs.writeFile("l10output.txt",data,(err)=>{
            if(err){
                console.log(err);
            }else{
                res.end('data saved in file');
            }
        })
    }
}).listen(3000,()=>{
    console.log('server up and running on 3000');
});