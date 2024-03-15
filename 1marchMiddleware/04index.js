// //extracting data from forms using post method



const express = require("express");
const app = express();
const fs = require("fs");

// let login;

// app.use(express.urlencoded({extended: true}));    //middleware for parsing url encoded bodies


// const auth = (req,res,next)=>{


//     login = 0;

    
//         if((req.body.name == "sankalp") && (req.body.email == "a@gmail.com")){
//             login = 1;
//         }
    


    
//     next();
// }

// app.get("/",(req,res)=>{
//     res.end("welcome to home ");
// })


// app.get('/login',(req,res)=>{

//     fs.readFile("form.html",(err,data)=>{
//         if(err){
//             console.log(err);
//         }else{
//            // res.setHeader({"Content-Type": "html"});
//             res.end(data);
//         }
//     })
// })

// app.post("/profile",[auth],(req,res)=>{
//     if(login==1){
//         res.send("Successful login");
//     }else{
//         res.end("error in login");
//     }
// })


// app.listen(3000);


//teachers code for middleware and authentication
//edit the html form acc to it before running this code

app.use(express.urlencoded({extended: true})); 

//simulated user database
const users = [
    {id:1,username:'john',password:"wick"},
    {id:2,username:"sony",password:"toprano"}
]

//middleware function for authentication
app.use('/profile',(req,res,next)=>{
    //extracting username and password from req body
    const { name , password } = req.body;
    console.log(req.body);

    const user = users.find(u=> u.username== name && u.password== password);

    //if user is found,set it on req object and proceed to next middleware
    if(user){
        req.user = user;
        console.log(user);
        next();
    }else{
        //if user is not found,send 401unauthorized access
        res.status(401).send("Unauthorized");
    }
});

//public route
app.get("/",(req,res)=>{
    res.send("Welcome to the public route");
})
//route to login form
app.get('/login',(req,res)=>{
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
app.post("/profile",(req,res)=>{
    res.end(`Welcome ${req.user.username}!`);
});

const port = 3000;
app.listen(port,()=>{
    console.log(`server running on ${port}`);
})


