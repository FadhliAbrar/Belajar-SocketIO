const http = require("http");

const express = require("express");
const app = express();

const server = http.createServer(app);

const { Server } = require("socket.io");
const { Socket } = require("dgram");
const { emit } = require("process");
const io = new Server(server);

app.get("/", (req, res, next)=>{
    res.sendFile(__dirname + "/SocketIO.html")
})

io.on('connection', (socket) => {
    socket.on('chatMessage', (msg) => {
        io.emit("pesan", msg);
    });
  });

server.listen(3000, ()=>{
    console.log("Listening on *:3000")
})