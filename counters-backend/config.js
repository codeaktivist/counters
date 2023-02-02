require('dotenv').config();

const NODE_ENV = process.env.NODE_ENV;

const { ENV, PORT, URL } = NODE_ENV === 'production'
  ? {
    ENV: NODE_ENV,
    PORT: process.env.PORT_PROD,
    URL: process.env.URL_PROD
  }
  : {
    ENV: NODE_ENV,
    PORT: process.env.PORT_DEV,
    URL: process.env.URL_DEV
  };

module.exports = { ENV, PORT, URL };