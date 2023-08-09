var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('ok')
})

app.get('/throw1', function (req, res) {
  throw new Error('boooom');
  res.send('throw error before res.send() call')
})

app.get('/throw2', function (req, res) {
  res.send('throw error after res.send() call')
  throw new Error('boooom');
})

app.get('/throw3', function (req, res) {
  res.send('set cookie after res.send() call')
  res.cookie('chocolate', 'chip')
})

app.listen(8000, function() { console.log('running on port 8000') })
