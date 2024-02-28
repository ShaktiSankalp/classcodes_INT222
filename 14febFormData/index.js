const http = require('http')
const fs = require('fs')
const querystring = require('querystring')


http.createServer((req,res)=>{
    if(req.url=='/'){
        fs.readFile('form.html',(err,data)=>{
            if(err){
                console.log(err);
                res.end('check console');
            }else{
                res.end(data);
            }
        })
    }else if(req.url=='/save-json'){
        let body = ""
        req.on('data',(chunk)=>{
            console.log(chunk);
            
            //console.log(chunk.toString('utf-8'));  //chunk(buffer) converted to string
            body = body + chunk;
            console.log(body);
        })
        req.on('end',()=>{
            const newData1 = querystring.parse(body).name;
            const newData2 = querystring.parse(body).data;
            const newDataS = newData1+" "+ newData2;
            const newData = querystring.parse(body);
            
            console.log(newData);
            console.log(typeof newData1);
           // console.log(newData[name]); //no work
            console.log(newData.data);
            fs.writeFile('formdata.txt',newDataS,'utf-8',(err)=>{
                if(err){
                    console.log('there was an error');
                }
                else{
                    console.log('data saved in file successfully');
                }
            })
            
        })
    }
}).listen(4000)