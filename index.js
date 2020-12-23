const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname+'/index.html');
});

io.on('connection', (socket) => {
    console.log("Connected: " + socket.id)
    socket.on('msg', (msg) => {
        socket.broadcast.emit('msg', msg);
      });
  });

http.listen(3000, function() {
    console.log("server is listening");
});