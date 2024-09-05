const db = require('../config/db');

db.run(`CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    address TEXT NOT NULL
)`);

exports.createCustomer = (customerData, callback) => {
    const { firstName, lastName, phone, email, address } = customerData;
    db.run(`INSERT INTO customers (firstName, lastName, phone, email, address) VALUES (?, ?, ?, ?, ?)`,
        [firstName, lastName, phone, email, address], function (err) {
            callback(err, { id: this.lastID });
        });
};
