const express = require("express");
const app = express();

//Middleware function
app.use((req,res,next)=>{
    console.log('This is a middleware function');
    next();   //calls the next middleware function in the stack if any
});

app.use((req,res,next)=>{
    console.log('This is another middleware function');
    next();   //calls the next middleware function in the stack if any
});

const logger = (req, res, next) => {
    console.log('Request received:', req.method, req.url);
    next();
};


const requireAuthentication = (req, res, next) => {
    // Check authentication logic here
    // For demonstration purposes, let's assume it's always authenticated
    console.log('authentication approved');
    next();
};


const middleware1 = (req, res, next) => {
    console.log('Middleware 1');
    next();
};

const middleware2 = (req, res, next) => {
    console.log('Middleware 2');
    next();
};

const combinedMiddleware = (req, res, next) => {
    middleware1(req, res, () => {
        middleware2(req, res, next);
    });
};

app.use('/aboutme',combinedMiddleware);

app.get('/',(req,res)=>{
    res.send("Hello world!");
});

app.get('/aboutme',(req,res)=>{
    res.send("About me page");
})

app.get('/middleware',[requireAuthentication,logger],(req,res)=>{
    res.send("Middleware-page");
});

app.listen(3000,()=>{
    console.log('Server is running on 3000');
});