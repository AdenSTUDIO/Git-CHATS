var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/client.html');
});
app.get('/server', (req, res) => {
  res.sendFile(__dirname + '/views/server.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

http.listen(process.env.PORT || 8888);