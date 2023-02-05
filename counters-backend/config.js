require('dotenv').config();

const NODE_ENV = process.env.NODE_ENV || 'development';

const { ENV, PORT, URL } = NODE_ENV === 'production'
  ? {
    ENV: NODE_ENV,
    PORT: process.env.PORT_PROD,
    URL: process.env.URL_PROD
  }
  : {
    ENV: NODE_ENV,
    PORT: process.env.PORT_DEV || 3001,
    URL: process.env.URL_DEV || 'fallback url'
  };

module.exports = { ENV, PORT, URL };