const express = require("express");
const app = express();

const fs = require("fs");


app.get("/",(req,res)=>{
    fs.readFile("form.html",(err,data)=>{
        if(err){
            res.send(err);
        }else{
           // res.setHeader({"Content-Type": "html"});
            res.end(data);
        }
    })
})

app.get("/submit",(req,res)=>{
    console.log(req.query);
    let name = req.query.name;
    let email = req.query.email;
    let data = name + " " + email
    //res.send(data);

    fs.writeFile("03file.txt",data,(err)=>{
        if(err){
            console.log(err);
        }else{
            res.send('data saved successfully');
        }
    })
})



app.listen(3000);