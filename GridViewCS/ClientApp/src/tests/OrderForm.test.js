import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import OrderForm from '../components/OrderForm';
import axios from 'axios';

jest.mock('axios');

describe('OrderForm', () => {
  const renderComponent = (id) => {
    return render(
      <Router>
        <OrderForm match={{ params: { id } }} />
      </Router>
    );
  };

  it('renders the form with empty fields for new order', () => {
    renderComponent();

    expect(screen.getByLabelText(/Customer ID/i)).toHaveValue('');
    expect(screen.getByLabelText(/Order Date/i)).toHaveValue('');
    expect(screen.getByLabelText(/Total Amount/i)).toHaveValue('');
  });

  it('renders the form with order data for existing order', async () => {
    const orderData = {
      OrderID: 1,
      CustomerID: '123',
      OrderDate: '2022-01-01',
      TotalAmount: '100.00'
    };

    axios.get.mockResolvedValueOnce({ data: orderData });

    renderComponent(1);

    expect(await screen.findByLabelText(/Customer ID/i)).toHaveValue('123');
    expect(await screen.findByLabelText(/Order Date/i)).toHaveValue('2022-01-01');
    expect(await screen.findByLabelText(/Total Amount/i)).toHaveValue('100.00');
  });

  it('submits the form to create a new order', async () => {
    axios.post.mockResolvedValueOnce({});

    renderComponent();

    fireEvent.change(screen.getByLabelText(/Customer ID/i), { target: { value: '456' } });
    fireEvent.change(screen.getByLabelText(/Order Date/i), { target: { value: '2022-02-01' } });
    fireEvent.change(screen.getByLabelText(/Total Amount/i), { target: { value: '200.00' } });

    fireEvent.click(screen.getByText(/Create/i));

    expect(axios.post).toHaveBeenCalledWith('/api/orders', {
      OrderID: '',
      CustomerID: '456',
      OrderDate: '2022-02-01',
      TotalAmount: '200.00'
    });
  });

  it('submits the form to update an existing order', async () => {
    const orderData = {
      OrderID: 1,
      CustomerID: '123',
      OrderDate: '2022-01-01',
      TotalAmount: '100.00'
    };

    axios.get.mockResolvedValueOnce({ data: orderData });
    axios.put.mockResolvedValueOnce({});

    renderComponent(1);

    fireEvent.change(await screen.findByLabelText(/Customer ID/i), { target: { value: '789' } });
    fireEvent.change(await screen.findByLabelText(/Order Date/i), { target: { value: '2022-03-01' } });
    fireEvent.change(await screen.findByLabelText(/Total Amount/i), { target: { value: '300.00' } });

    fireEvent.click(screen.getByText(/Update/i));

    expect(axios.put).toHaveBeenCalledWith('/api/orders/1', {
      OrderID: 1,
      CustomerID: '789',
      OrderDate: '2022-03-01',
      TotalAmount: '300.00'
    });
  });
});
