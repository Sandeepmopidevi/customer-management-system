exports.validateCustomer = (req, res, next) => {
    const { firstName, lastName, phone, email } = req.body;
    if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
        return res.status(400).send({ error: 'Invalid name' });
    }
    if (!/^\d{10}$/.test(phone)) {
        return res.status(400).send({ error: 'Invalid phone number' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).send({ error: 'Invalid email' });
    }
    next();
};
