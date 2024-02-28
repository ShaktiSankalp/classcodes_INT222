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


//if we reapeat the same route again this wont give error but also wont work the first one will be given prioritty
// app.get('/aboutme',(req,res)=>{
//     res.send('This is about  page');
// });

















app.listen(3000,()=>{console.log(`listening on port 3000`)});  //express server listening on this particular port number

