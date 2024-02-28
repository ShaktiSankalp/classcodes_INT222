const express = require("express");

const app = express();   //creating an instance


//route handler for home route
app.get("/",(req,res)=>{       //get method is used to get/request a service from server
    res.send("Hello World!");
});

//route handler for aboutme page
app.get('/aboutme',(req,res)=>{
    res.send('This is about me page');
});


app.get('/aboutme',(req,res)=>{
    res.send('This is about  page');
});











app.listen(3000,()=>{console.log(`listening on port 3000`)});  //express server listening on this particular port number

