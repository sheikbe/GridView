import React from 'react';
import { render, screen } from '@testing-library/react';
import OrderList from '../components/OrderList';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('OrderList', () => {
  it('fetches and displays orders', async () => {
    const mock = new MockAdapter(axios);
    const orders = [
      { OrderID: 1, CustomerID: 1, OrderDate: '2021-01-01', TotalAmount: 100.00 },
      { OrderID: 2, CustomerID: 2, OrderDate: '2021-01-02', TotalAmount: 200.00 },
    ];
    mock.onGet('/api/orders').reply(200, orders);

    render(<OrderList />);

    const orderElements = await screen.findAllByText(/Order ID/);
    expect(orderElements).toHaveLength(2);
    expect(screen.getByText('Order ID: 1, Customer ID: 1, Order Date: 2021-01-01, Total Amount: 100')).toBeInTheDocument();
    expect(screen.getByText('Order ID: 2, Customer ID: 2, Order Date: 2021-01-02, Total Amount: 200')).toBeInTheDocument();
  });

  it('displays an error message when fetching orders fails', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet('/api/orders').reply(500);

    render(<OrderList />);

    const errorMessage = await screen.findByText(/Error fetching orders/);
    expect(errorMessage).toBeInTheDocument();
  });
});
