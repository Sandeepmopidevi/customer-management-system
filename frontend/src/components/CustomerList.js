import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/customers')
            .then((res) => res.json())
            .then((data) => {
                setCustomers(data);
            })
            .catch((err) => {
                console.error('Error fetching customers:', err);
            });
    }, []);

    return (
        <div>
            <h2>Customer List</h2>
            {customers.length > 0 ? (
                <ul>
                    {customers.map((customer) => (
                        <li key={customer.id}>
                            {customer.first_name} {customer.last_name} - {customer.email}
                            <Link to={`/customers/modify/${customer.id}`}>Edit</Link> {/* Edit link */}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No customers found.</p>
            )}
        </div>
    );
};

export default CustomerList;
