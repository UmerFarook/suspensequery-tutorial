require('dotenv').config()


const mongoos = require('mongoose');
mongoos.connect(process.env.DATABASE_URL)
export const db = mongoos.connection;
