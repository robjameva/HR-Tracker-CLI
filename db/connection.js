const mysql = require('mysql2');


// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'robert.123',
        database: 'employees'
    },
    console.log('Connected to the employees database')
);

module.exports = db;