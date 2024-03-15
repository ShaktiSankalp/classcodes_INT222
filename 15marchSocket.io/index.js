const express = require("express");
const socketIO = require("socket.io");
const path = require("path");
const app = express();



const server = app.listen(3000,()=>{
    console.log('server running on 3000');

});

app.use(express.static(path.join(__dirname))) //must understand this line plaaz . prolly  a way to serve static html file

const io = socketIO(server); //server side instance of socketIO

io.on("connection",(socket)=>{
    console.log('A user is connected to the server');
})




