import dotenv from 'dotenv';

dotenv.config();

export default {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000
}