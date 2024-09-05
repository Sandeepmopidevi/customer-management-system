const db = require('../config/db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS customers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT NOT NULL,
        address TEXT NOT NULL
    )`);
});

const Customer = {
    create: (data, callback) => {
        const query = `INSERT INTO customers (first_name, last_name, phone, email, address) VALUES (?, ?, ?, ?, ?)`;
        db.run(query, [data.first_name, data.last_name, data.phone, data.email, data.address], callback);
    },

    findById: (id, callback) => {
        const query = `SELECT * FROM customers WHERE id = ?`;
        db.get(query, [id], callback);
    },

    findAll: (callback) => {
        const query = `SELECT * FROM customers`;
        db.all(query, callback);
    },

    update: (id, data, callback) => {
        const query = `UPDATE customers SET first_name = ?, last_name = ?, phone = ?, email = ?, address = ? WHERE id = ?`;
        db.run(query, [data.first_name, data.last_name, data.phone, data.email, data.address, id], callback);
    },

    delete: (id, callback) => {
        const query = `DELETE FROM customers WHERE id = ?`;
        db.run(query, [id], callback);
    }
};

module.exports = Customer;
