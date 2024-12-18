import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Order List</h1>
      <ul>
        {orders.map((order) => (
          <li key={order.OrderID}>
            Order ID: {order.OrderID}, Customer ID: {order.CustomerID}, Order Date: {order.OrderDate}, Total Amount: {order.TotalAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
