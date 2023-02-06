const config = require('./config');
const http = require('http');
const app = require('./app');

const server = http.createServer(app);

const ENV = config.ENV;
const PORT = config.PORT;

server.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
  console.log(`Environment: ${ENV}`);
});
