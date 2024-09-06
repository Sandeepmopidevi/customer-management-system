import React, { useState } from 'react';

const CustomerForm = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        address: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/api/customers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Customer created:', data);
            setMessage('Customer created successfully!'); // Set success message
            // Optionally reset form data
            setFormData({
                first_name: '',
                last_name: '',
                phone: '',
                email: '',
                address: ''
            });
        })
        .catch((error) => {
            console.error('Error:', error);
            setMessage('Customer created successfully!');
        });
    };

    return (
        <div>
            <h2>Add New Customer</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="first_name" placeholder="First Name" onChange={handleChange} value={formData.first_name} required />
                <input type="text" name="last_name" placeholder="Last Name" onChange={handleChange} value={formData.last_name} required />
                <input type="text" name="phone" placeholder="Phone" onChange={handleChange} value={formData.phone} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} required />
                <input type="text" name="address" placeholder="Address" onChange={handleChange} value={formData.address} required />
                <button type="submit">Add Customer</button>
            </form>
            
            {/* Display success or error message */}
            {message && <p>{message}</p>}
        </div>
    );
};

export default CustomerForm;
