const express = require('express');
const app = express();

// Serve react frontend
app.use(express.static('build'));

const infoRouter = require('./routes/infoRouter');
const nodeRouter = require('./routes/nodeRouter');
const redisRouter = require('./routes/redisRouter');
app.use('/api', infoRouter);
app.use('/api/node', nodeRouter);
app.use('/api/redis', redisRouter);

module.exports = app;