import React from 'react';

const RowCommand1 = ({ order, onEdit, onDelete }) => {
  const handleEditClick = () => {
    onEdit(order);
  };

  const handleDeleteClick = () => {
    onDelete(order.orderId);
  };

  return (
    <tr>
      <td>{order.orderId}</td>
      <td>{order.customerId}</td>
      <td>{order.productId}</td>
      <td>{order.quantity}</td>
      <td>{order.price}</td>
      <td>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </td>
    </tr>
  );
};

export default RowCommand1;
