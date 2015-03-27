var app = require('express')();
var http = require('http').Server(app);
var socketio = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function() {
  console.log('listening on *.3000');
});

socketio.on('connection', function(socket) {
  console.log('someone is joining the chat. oooooo');
  socket.on('disconnect', function() {
    console.log('someone is leaving the chat.');
  });
});

socketio.on('connection', function(socket){
  socket.on('chat message', function(msg){
    socketio.emit('chat message', msg);
  });
});
