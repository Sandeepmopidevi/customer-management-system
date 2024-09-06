import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';
import RemoveCustomer from './components/RemoveCustomer';
import ModifyCustomer from './components/ModifyCustomer';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/customers/new" element={<CustomerForm />} />
                <Route path="/customers" element={<CustomerList />} />
                <Route path="/customers/remove" element={<RemoveCustomer />} />
                <Route path="/customers/modify/:id" element={<ModifyCustomer />} />
            </Routes>
        </Router>
    );
};

export default App;
