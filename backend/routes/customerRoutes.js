app.put('/api/customers/:id', (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, phone, email, address } = req.body;

    const query = `
        UPDATE customers
        SET first_name = ?, last_name = ?, phone = ?, email = ?, address = ?
        WHERE id = ?
    `;

    db.run(query, [first_name, last_name, phone, email, address, id], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Customer updated successfully', changes: this.changes });
        }
    });
});
