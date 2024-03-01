const express = require('express');
const app = express();
const fs = require('fs');

const logger = (req,res,next)=>{
    console.log('Request received:', req.method, req.url);
    //const filePath = __dirname + "/request.log";
    const timeL = new Date().toLocaleString();
    console.log(timeL);
    const body = "Method = " + req.method + " URL = " + req.url + " Time = " + timeL;
    fs.appendFile("request.log",body,(err)=>{
        if(err){
            console.log('error');
        }else{
            console.log('data saved successfully');
        }
    })
    next();

};

app.get('/',[logger],(req,res)=>{
    res.send("Home page");
})

app.listen(3000);