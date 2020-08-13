var express = require('express');
var app = express();

app.use('/JS', express.static('JavaScript'));

var server = require('https').createServer(app);
var io = require('socket.io')(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/client.html');
});
app.get('/server', (req, res) => {
  res.sendFile(__dirname + '/views/server.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(process.env.PORT || 8888);