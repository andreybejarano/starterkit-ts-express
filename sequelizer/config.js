require('dotenv').config();
const path = require('path');

module.exports = {
  development: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    storage: path.join(__dirname, '..', 'database/data.sqlite'),
    dialect: process.env.DB_DIALECT
  },
  test: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    storage: path.join(__dirname, '..', 'database/data.sqlite'),
    dialect: process.env.DB_DIALECT
  },
  production: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    storage: path.join(__dirname, '..', 'database/data.sqlite'),
    dialect: process.env.DB_DIALECT
  }
}
