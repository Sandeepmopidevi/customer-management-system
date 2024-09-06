import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Customer Management System</h1>
            <ul>
                <li><Link to="/customers/new">Add a Customer</Link></li>
                <li><Link to="/customers">Show All Customers</Link></li>
                <li><Link to="/customers/remove">Remove a Customer</Link></li>
                <li><Link to="/customers">Modify a Customer</Link></li>
            </ul>
        </div>
    );
};

export default HomePage;
