import React from 'react';

const RowDataBound = ({ order }) => {
  return (
    <tr>
      <td>{order.orderId}</td>
      <td>{order.customerId}</td>
      <td>{order.productId}</td>
      <td>{order.quantity}</td>
      <td>{order.price}</td>
    </tr>
  );
};

export default RowDataBound;
