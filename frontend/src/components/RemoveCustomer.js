import React, { useState } from 'react';

const RemoveCustomer = () => {
    const [customerId, setCustomerId] = useState('');
    const [message, setMessage] = useState('');

    const handleDelete = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/api/customers/${customerId}`, {
            method: 'DELETE',
        })
        .then((response) => {
            if (response.ok) {
                setMessage('Customer deleted successfully!');
            } else {
                setMessage('Failed to delete customer.');
            }
        })
        .catch((error) => {
            console.error('Error deleting customer:', error);
            setMessage('Error deleting customer. Please try again.');
        });
    };

    return (
        <div>
            <h2>Remove Customer</h2>
            <form onSubmit={handleDelete}>
                <input
                    type="text"
                    placeholder="Enter Customer ID"
                    value={customerId}
                    onChange={(e) => setCustomerId(e.target.value)}
                    required
                />
                <button type="submit">Delete Customer</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RemoveCustomer;
