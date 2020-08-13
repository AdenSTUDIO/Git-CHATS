var express = require('express');
var app = express();

app.use('/js', express.static('JavaScript'));

var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/client.html');
});

app.get('/server', (req, res) => {
    res.sendFile(__dirname + '/views/server.html');
  });
  

http.listen(process.env.PORT);