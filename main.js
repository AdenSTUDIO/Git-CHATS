var express = require('express');
var app = express();

app.use('/js', express.static('JavaScript'));

var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/client.html');
});

app.get('/server', (req, res) => {
  res.sendFile(__dirname + '/views/server.html');
});

io.on('connection', (socket) => {
  console.log(socket.id + ' connected');
});

server.listen(process.env.PORT || 3000);