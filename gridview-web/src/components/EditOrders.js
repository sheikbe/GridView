import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditOrders = () => {
  const [orders, setOrders] = useState([]);
  const [editingOrder, setEditingOrder] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('/api/orders');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleEditClick = (order) => {
    setEditingOrder(order);
  };

  const handleSaveClick = async () => {
    try {
      await axios.put(`/api/orders/${editingOrder.orderId}`, editingOrder);
      setEditingOrder(null);
      fetchOrders();
    } catch (error) {
      console.error('Error saving order:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Edit Orders</h1>
      {editingOrder ? (
        <div>
          <h2>Edit Order</h2>
          <form>
            <label>
              Customer ID:
              <input
                type="text"
                name="customerId"
                value={editingOrder.customerId}
                onChange={handleChange}
              />
            </label>
            <label>
              Product ID:
              <input
                type="text"
                name="productId"
                value={editingOrder.productId}
                onChange={handleChange}
              />
            </label>
            <label>
              Quantity:
              <input
                type="number"
                name="quantity"
                value={editingOrder.quantity}
                onChange={handleChange}
              />
            </label>
            <label>
              Price:
              <input
                type="number"
                name="price"
                value={editingOrder.price}
                onChange={handleChange}
              />
            </label>
            <button type="button" onClick={handleSaveClick}>
              Save
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer ID</th>
                <th>Product ID</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.orderId}>
                  <td>{order.orderId}</td>
                  <td>{order.customerId}</td>
                  <td>{order.productId}</td>
                  <td>{order.quantity}</td>
                  <td>{order.price}</td>
                  <td>
                    <button onClick={() => handleEditClick(order)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EditOrders;
