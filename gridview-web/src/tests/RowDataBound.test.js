import React from 'react';
import { render, screen } from '@testing-library/react';
import RowDataBound from '../components/RowDataBound';

const mockOrder = {
  orderId: 1,
  customerId: 1,
  productId: 1,
  quantity: 1,
  price: 100,
};

test('renders RowDataBound component', () => {
  render(<RowDataBound order={mockOrder} />);
  expect(screen.getByText(mockOrder.orderId)).toBeInTheDocument();
  expect(screen.getByText(mockOrder.customerId)).toBeInTheDocument();
  expect(screen.getByText(mockOrder.productId)).toBeInTheDocument();
  expect(screen.getByText(mockOrder.quantity)).toBeInTheDocument();
  expect(screen.getByText(mockOrder.price)).toBeInTheDocument();
});
