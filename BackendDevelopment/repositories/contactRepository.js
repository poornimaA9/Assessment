const db = require('../config/db');

const createSubmission = (name, email, message, callback) => {
    const query = 'INSERT INTO submissions (name, email, message) VALUES (?, ?, ?)';
    db.query(query, [name, email, message], (err, results) => {
        if (err) {
            return callback(err);
        }
        callback(null, { id: results.insertId });
    });
};

module.exports = {
    createSubmission
};
