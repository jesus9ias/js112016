var express = require('express');
var app = express();

var html_dir = '/';

var options = {
  root: __dirname + '/',
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
};

app.use(express.static('/'));

app.get('/cookies', function (req, res) {
  res.sendFile('cookies.html', options);
});

app.listen(3333, function () {
  console.log('Server running on port 3333!');
});
