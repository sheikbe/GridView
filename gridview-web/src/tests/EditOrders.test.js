import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EditOrders from '../components/EditOrders';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

const mockOrders = [
  { orderId: 1, customerId: 1, productId: 1, quantity: 1, price: 100 },
  { orderId: 2, customerId: 2, productId: 2, quantity: 2, price: 200 },
];

beforeEach(() => {
  mock.reset();
});

test('renders EditOrders component', () => {
  render(<EditOrders />);
  const linkElement = screen.getByText(/Edit Orders/i);
  expect(linkElement).toBeInTheDocument();
});

test('fetches and displays orders', async () => {
  mock.onGet('/api/orders').reply(200, mockOrders);

  render(<EditOrders />);

  const rows = await screen.findAllByRole('row');
  expect(rows).toHaveLength(mockOrders.length + 1); // +1 for the header row

  mockOrders.forEach((order) => {
    expect(screen.getByText(order.orderId)).toBeInTheDocument();
    expect(screen.getByText(order.customerId)).toBeInTheDocument();
    expect(screen.getByText(order.productId)).toBeInTheDocument();
    expect(screen.getByText(order.quantity)).toBeInTheDocument();
    expect(screen.getByText(order.price)).toBeInTheDocument();
  });
});

test('edits and saves an order', async () => {
  mock.onGet('/api/orders').reply(200, mockOrders);
  mock.onPut('/api/orders/1').reply(200);

  render(<EditOrders />);

  const editButton = await screen.findByText('Edit');
  fireEvent.click(editButton);

  const quantityInput = screen.getByLabelText('Quantity:');
  fireEvent.change(quantityInput, { target: { value: '5' } });

  const saveButton = screen.getByText('Save');
  fireEvent.click(saveButton);

  expect(mock.history.put.length).toBe(1);
  expect(mock.history.put[0].data).toEqual(JSON.stringify({ ...mockOrders[0], quantity: 5 }));
});
