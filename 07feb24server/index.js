const http = require('http');

//http.createServer().listen(4000);

const fs = require('fs');


http.createServer((req,res)=>{
    
    //reading a pic file
    // fs.readFile('sample.png',(err,data)=>{
    //     if(err){
    //         console.log(err);
    //         res.end("There was an error check the console")
    //     }else{
    //         res.end(data);
    //     }
    //})

    //reading a text file
    // fs.readFile('sample.txt','utf-8',(err,data)=>{
    //     if(err){
    //         console.log(err);
    //         res.end("There was an error check the console")
    //     }else{
    //         res.end(data);
    //     }
    // })



    //reading a HTML file
    // fs.readFile('sample.html',(err,data)=>{
    //     if(err){
    //         console.log(err);
    //         res.end("There was an error check the console")
    //     }else{
    //         res.end(data);
    //     }
    // })



        if(req.url=='/'){
            fs.readFile('sample.txt','utf-8',(err,data)=>{
                if(err){
                    console.error(err);
                    res.end('there was some error');
                }
                else{
                    res.end(data);
                }

            })
        }
        else if(req.url=='/write'){
            const message = 'hola';
            fs.writeFile('example.txt',message,'utf-8',(err)=>{
                if(err){
                    res.end('there was some error');
                }
                else{
                    res.end('everything fine');
                }
            })
        }


    





    // res.end("Hi");      // this fxn indicates the end of response therefore use once only 
}).listen(4000,()=>{
    console.log('server up and running on 4000');
});
