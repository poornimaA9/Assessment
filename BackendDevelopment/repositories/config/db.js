const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'poornima',
    database: 'contact_form_db'
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database: ' + err.message);
        return;
    }
    console.log('Connected to the MySQL database.');
});

module.exports = connection;
