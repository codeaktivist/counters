require('dotenv').config();

const ENV = process.env.NODE_ENV || 'unset';

const { PORT } = ENV === 'production'
  ? {
    PORT: process.env.PORT_PROD || 5001, // Fallback Prod Port if unset
  }
  : {
    PORT: process.env.PORT_DEV || 3001, // Fallback Prod Port if unset
  };

module.exports = { ENV, PORT };