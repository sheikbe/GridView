import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

test('renders GridView component', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/GridView/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders EditOrders component', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/Edit Orders/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders RowCommand1 component', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/RowCommand1/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders RowCommand2 component', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/RowCommand2/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders RowDataBound component', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/RowDataBound/i);
  expect(linkElement).toBeInTheDocument();
});
