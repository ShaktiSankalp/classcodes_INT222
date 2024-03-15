const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.urlencoded({extended: true}));  

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
let loggedin;


const users = [
    {id:1,username:'john',password:"wick"},
    {id:2,username:"sony",password:"toprano"}
]

app.use('/profile',(req,res,next)=>{
    //extracting username and password from req body
    loggedin = 0;
    const { name , password } = req.body;
    console.log(req.body);

    const user = users.find(u=> u.username== name && u.password== password);

    //if user is found,set it on req object and proceed to next middleware
    if(user){
        req.user = user;
        console.log(user);
        loggedin = 1;
        next();
    }else{
        //if user is not found,send 401unauthorized access
        res.status(401).send("Unauthorized");
    }
});

app.get('/login',[logger],(req,res)=>{
    fs.readFile(__dirname + '/form.html',"utf-8",(err,data)=>{
        if(err){
            console.error(err);
            res.send("Error desplaying form");
        }
        else{
            res.end(data);
        }
    });
});

//protected route
app.post("/profile",[logger],(req,res)=>{
    res.end(`Welcome ${req.user.username}!`);
});

app.get("/checkout",[logger],(req,res)=>{
    if(loggedin == 1){
    res.end("Checkout ");}
    else{
        res.end("login first ");
    }
})



app.get('/',[logger],(req,res)=>{
    res.send("Home page");
})





app.listen(3000);