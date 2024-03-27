const express = require("express");
const socketIO = require("socket.io");
const path = require("path");
const app = express();



const server = app.listen(3000,()=>{
    console.log('server running on 3000');

});

app.use(express.static(path.join(__dirname))) //must understand this line plaaz . prolly  a way to serve static html file

const io = socketIO(server); //server side instance of socketIO

const users=[];

io.on("connection",(socket)=>{
    console.log('A user is connected to the server');

    socket.on("setUsername",(username)=>{
        users[socket.id]= username;
        socket.broadcast.emit("userJoined",`<h3>${username} has joined the chat.</h3>`);
    })
    socket.on("chat message",(msg)=>{
        const username = users[socket.id] || "Anonymous";
        io.emit("chat message",`${username}: ${msg}`);
    })

    socket.on("disconnect",()=>{
        const username = users[socket.id] || "Anonymous"; 
        delete users[socket.id];
        socket.broadcast.emit("userLeft",`<h3>${username} has left the chat</h3>`);

    })

})




