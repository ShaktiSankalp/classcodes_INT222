const express = require("express");
const app = express();
const fs = require("fs");


app.get("/",(req,res)=>{
    res.send("Go to /readFile");
})


app.get("/readFile",(req,res)=>{
    fs.readFile("example.txt","utf-8",(err,data)=>{
        if(err){
            res.send(err);
        }else{
            //if instead of displaying the file its downloading then use this
            //res.setHeader("content-Type": "text/plain");
            res.send(data);
        }
    })
})



app.listen(3000);





















