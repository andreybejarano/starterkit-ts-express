import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

export default {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  database: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    storage: path.join(__dirname, '../../database/data.sqlite'),
    dialect: process.env.DB_DIALECT || 'sqlite'
  }
}
