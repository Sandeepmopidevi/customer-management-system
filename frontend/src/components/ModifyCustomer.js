import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ModifyCustomer = () => {
    const { id } = useParams(); 
    const navigate = useNavigate(); 
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        address: ''
    });
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/api/customers/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setFormData({
                    first_name: data.first_name,
                    last_name: data.last_name,
                    phone: data.phone,
                    email: data.email,
                    address: data.address,
                });
            })
            .catch((err) => {
                console.error('Error fetching customer:', err);
                setMessage('Failed to load customer data.');
            });
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/api/customers/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Customer updated:', data);
            setMessage('Customer updated successfully!');

            navigate('/customers');
        })
        .catch((error) => {
            console.error('Error updating customer:', error);
            setMessage('Error updating customer. Please try again.');
        });
    };

    return (
        <div>
            <h2>Modify Customer</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={formData.first_name}
                    required
                />
                <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={formData.last_name}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    onChange={handleChange}
                    value={formData.phone}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={handleChange}
                    value={formData.address}
                    required
                />
                <button type="submit">Update Customer</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default ModifyCustomer;
