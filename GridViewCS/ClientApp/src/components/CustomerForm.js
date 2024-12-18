import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const CustomerForm = () => {
  const [customer, setCustomer] = useState({
    CustomerID: '',
    CompanyName: '',
    FirstName: '',
    LastName: ''
  });
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchCustomer = async () => {
        try {
          const response = await axios.get(`/api/customers/${id}`);
          setCustomer(response.data);
        } catch (error) {
          console.error('Error fetching customer:', error);
        }
      };

      fetchCustomer();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`/api/customers/${id}`, customer);
      } else {
        await axios.post('/api/customers', customer);
      }
      history.push('/customers');
    } catch (error) {
      console.error('Error saving customer:', error);
    }
  };

  return (
    <div>
      <h1>{id ? 'Edit Customer' : 'Add Customer'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="CompanyName">Company Name:</label>
          <input
            type="text"
            id="CompanyName"
            name="CompanyName"
            value={customer.CompanyName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="FirstName">First Name:</label>
          <input
            type="text"
            id="FirstName"
            name="FirstName"
            value={customer.FirstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="LastName">Last Name:</label>
          <input
            type="text"
            id="LastName"
            name="LastName"
            value={customer.LastName}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{id ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default CustomerForm;
