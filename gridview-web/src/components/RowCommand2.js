import React from 'react';

const RowCommand2 = ({ product, onIncreasePrice }) => {
  const handleIncreaseClick = () => {
    onIncreasePrice(product.productId);
  };

  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.productNumber}</td>
      <td>{product.listPrice}</td>
      <td>
        <button onClick={handleIncreaseClick}>Increase Price 5%</button>
      </td>
    </tr>
  );
};

export default RowCommand2;
