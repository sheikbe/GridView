import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RowCommand2 from '../components/RowCommand2';

const mockProduct = { productId: 1, name: 'Product 1', productNumber: 'P001', listPrice: 100 };
const mockOnIncreasePrice = jest.fn();

test('renders RowCommand2 component', () => {
  render(<RowCommand2 product={mockProduct} onIncreasePrice={mockOnIncreasePrice} />);
  const productNameElement = screen.getByText(mockProduct.name);
  expect(productNameElement).toBeInTheDocument();
});

test('calls onIncreasePrice when Increase Price button is clicked', () => {
  render(<RowCommand2 product={mockProduct} onIncreasePrice={mockOnIncreasePrice} />);
  const increaseButton = screen.getByText('Increase Price 5%');
  fireEvent.click(increaseButton);
  expect(mockOnIncreasePrice).toHaveBeenCalledWith(mockProduct.productId);
});
