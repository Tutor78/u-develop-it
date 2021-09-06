const mysql = require('mysql2');

require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySql username,
        user: 'root',
        // Your MySql password
        password: process.env.DB_PASS,
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;