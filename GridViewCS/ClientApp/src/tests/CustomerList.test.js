import React from 'react';
import { render, screen } from '@testing-library/react';
import CustomerList from '../components/CustomerList';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('CustomerList', () => {
  it('fetches and displays customers', async () => {
    const mock = new MockAdapter(axios);
    const customers = [
      { CustomerID: 1, FirstName: 'John', LastName: 'Doe', CompanyName: 'Company A' },
      { CustomerID: 2, FirstName: 'Jane', LastName: 'Smith', CompanyName: 'Company B' },
    ];
    mock.onGet('/api/customers').reply(200, customers);

    render(<CustomerList />);

    const customerElements = await screen.findAllByText(/Company/);
    expect(customerElements).toHaveLength(2);
    expect(screen.getByText('John Doe - Company A')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith - Company B')).toBeInTheDocument();
  });

  it('displays an error message when fetching customers fails', async () => {
    const mock = new MockAdapter(axios);
    mock.onGet('/api/customers').reply(500);

    render(<CustomerList />);

    const errorMessage = await screen.findByText(/Error fetching customers/);
    expect(errorMessage).toBeInTheDocument();
  });
});
