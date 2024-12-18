import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CustomerForm from '../components/CustomerForm';
import axios from 'axios';

jest.mock('axios');

describe('CustomerForm', () => {
  const renderComponent = (id) => {
    return render(
      <Router>
        <CustomerForm match={{ params: { id } }} />
      </Router>
    );
  };

  it('renders the form with empty fields for new customer', () => {
    renderComponent();

    expect(screen.getByLabelText(/Company Name/i)).toHaveValue('');
    expect(screen.getByLabelText(/First Name/i)).toHaveValue('');
    expect(screen.getByLabelText(/Last Name/i)).toHaveValue('');
  });

  it('renders the form with customer data for existing customer', async () => {
    const customerData = {
      CustomerID: 1,
      CompanyName: 'Company A',
      FirstName: 'John',
      LastName: 'Doe'
    };

    axios.get.mockResolvedValueOnce({ data: customerData });

    renderComponent(1);

    expect(await screen.findByLabelText(/Company Name/i)).toHaveValue('Company A');
    expect(await screen.findByLabelText(/First Name/i)).toHaveValue('John');
    expect(await screen.findByLabelText(/Last Name/i)).toHaveValue('Doe');
  });

  it('submits the form to create a new customer', async () => {
    axios.post.mockResolvedValueOnce({});

    renderComponent();

    fireEvent.change(screen.getByLabelText(/Company Name/i), { target: { value: 'Company B' } });
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'Jane' } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Smith' } });

    fireEvent.click(screen.getByText(/Create/i));

    expect(axios.post).toHaveBeenCalledWith('/api/customers', {
      CustomerID: '',
      CompanyName: 'Company B',
      FirstName: 'Jane',
      LastName: 'Smith'
    });
  });

  it('submits the form to update an existing customer', async () => {
    const customerData = {
      CustomerID: 1,
      CompanyName: 'Company A',
      FirstName: 'John',
      LastName: 'Doe'
    };

    axios.get.mockResolvedValueOnce({ data: customerData });
    axios.put.mockResolvedValueOnce({});

    renderComponent(1);

    fireEvent.change(await screen.findByLabelText(/Company Name/i), { target: { value: 'Company C' } });
    fireEvent.change(await screen.findByLabelText(/First Name/i), { target: { value: 'Alice' } });
    fireEvent.change(await screen.findByLabelText(/Last Name/i), { target: { value: 'Johnson' } });

    fireEvent.click(screen.getByText(/Update/i));

    expect(axios.put).toHaveBeenCalledWith('/api/customers/1', {
      CustomerID: 1,
      CompanyName: 'Company C',
      FirstName: 'Alice',
      LastName: 'Johnson'
    });
  });
});
