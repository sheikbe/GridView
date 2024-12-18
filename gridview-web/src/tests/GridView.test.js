import React from 'react';
import { render, screen } from '@testing-library/react';
import GridView from '../components/GridView';

test('renders GridView component', () => {
  render(<GridView />);
  const linkElement = screen.getByText(/GridView/i);
  expect(linkElement).toBeInTheDocument();
});

test('fetches and displays data', async () => {
  const mockData = [
    { orderId: 1, customerId: 1, productId: 1, quantity: 1, price: 100 },
    { orderId: 2, customerId: 2, productId: 2, quantity: 2, price: 200 },
  ];

  jest.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    })
  );

  render(<GridView />);

  const rows = await screen.findAllByRole('row');
  expect(rows).toHaveLength(mockData.length + 1); // +1 for the header row

  mockData.forEach((order) => {
    expect(screen.getByText(order.orderId)).toBeInTheDocument();
    expect(screen.getByText(order.customerId)).toBeInTheDocument();
    expect(screen.getByText(order.productId)).toBeInTheDocument();
    expect(screen.getByText(order.quantity)).toBeInTheDocument();
    expect(screen.getByText(order.price)).toBeInTheDocument();
  });

  global.fetch.mockRestore();
});
