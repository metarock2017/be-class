var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 8806;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

//******************************************




io.on('connection', function(socket) {
    console.log('a user has connected');
});

http.listen(port, function() {
    console.log('listening on ' + port);
});

io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        console.log('message: ' + msg);
    });
});

io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        io.emit('chat message', msg);
    });
});


