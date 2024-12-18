import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import RowCommand1 from '../components/RowCommand1';

const mockOrder = { orderId: 1, customerId: 1, productId: 1, quantity: 1, price: 100 };
const mockOnEdit = jest.fn();
const mockOnDelete = jest.fn();

test('renders RowCommand1 component', () => {
  render(<RowCommand1 order={mockOrder} onEdit={mockOnEdit} onDelete={mockOnDelete} />);
  const orderIdElement = screen.getByText(mockOrder.orderId);
  expect(orderIdElement).toBeInTheDocument();
});

test('calls onEdit when Edit button is clicked', () => {
  render(<RowCommand1 order={mockOrder} onEdit={mockOnEdit} onDelete={mockOnDelete} />);
  const editButton = screen.getByText('Edit');
  fireEvent.click(editButton);
  expect(mockOnEdit).toHaveBeenCalledWith(mockOrder);
});

test('calls onDelete when Delete button is clicked', () => {
  render(<RowCommand1 order={mockOrder} onEdit={mockOnEdit} onDelete={mockOnDelete} />);
  const deleteButton = screen.getByText('Delete');
  fireEvent.click(deleteButton);
  expect(mockOnDelete).toHaveBeenCalledWith(mockOrder.orderId);
});
