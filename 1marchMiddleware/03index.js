//extracting data from forms using post method

const express = require("express");
const app = express();

const fs = require("fs");

app.use(express.urlencoded({extended: true}));    //middleware for parsing url encoded bodies


app.get("/",(req,res)=>{
    fs.readFile("form.html",(err,data)=>{
        if(err){
            console.log(err);
        }else{
           // res.setHeader({"Content-Type": "html"});
            res.end(data);
        }
    })
})

app.post("/submit",(req,res)=>{
   
    console.log(req.body);
    let name = req.body.name;
    let email = req.body.email;
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