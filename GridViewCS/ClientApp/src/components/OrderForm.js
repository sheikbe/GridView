import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const OrderForm = () => {
  const [order, setOrder] = useState({
    OrderID: '',
    CustomerID: '',
    OrderDate: '',
    TotalAmount: ''
  });
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchOrder = async () => {
        try {
          const response = await axios.get(`/api/orders/${id}`);
          setOrder(response.data);
        } catch (error) {
          console.error('Error fetching order:', error);
        }
      };

      fetchOrder();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`/api/orders/${id}`, order);
      } else {
        await axios.post('/api/orders', order);
      }
      history.push('/orders');
    } catch (error) {
      console.error('Error saving order:', error);
    }
  };

  return (
    <div>
      <h1>{id ? 'Edit Order' : 'Add Order'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="CustomerID">Customer ID:</label>
          <input
            type="text"
            id="CustomerID"
            name="CustomerID"
            value={order.CustomerID}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="OrderDate">Order Date:</label>
          <input
            type="date"
            id="OrderDate"
            name="OrderDate"
            value={order.OrderDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="TotalAmount">Total Amount:</label>
          <input
            type="number"
            id="TotalAmount"
            name="TotalAmount"
            value={order.TotalAmount}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{id ? 'Update' : 'Create'}</button>
      </form>
    </div>
  );
};

export default OrderForm;
