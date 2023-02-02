const express = require('express');
const app = express();

let nodeCounter = 0;

app.use(express.static('build'));

app.get('/api/node', (req, res) => {
  res.send(nodeCounter.toString());
});

app.get('/api/node/increment', (req, res) => {
  nodeCounter += 1;
  res.send(nodeCounter.toString());
});

app.get('/api/node/decrement', (req, res) => {
  nodeCounter -= 1;
  res.send(nodeCounter.toString());
});

app.get('/api/node/reset', (req, res) => {
  nodeCounter = 0;
  res.send(nodeCounter.toString());
});

app.get('/api/env', (req, res) => {
  res.send(process.env.NODE_ENV.toString());
});

module.exports = app;