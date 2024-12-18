import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await axios.get('/api/customers');
        setCustomers(response.data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div>
      <h1>Customer List</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.CustomerID}>
            {customer.FirstName} {customer.LastName} - {customer.CompanyName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
