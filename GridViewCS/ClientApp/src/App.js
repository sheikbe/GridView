import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import OrderList from './components/OrderList';
import CustomerForm from './components/CustomerForm';
import OrderForm from './components/OrderForm';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/customers" component={CustomerList} />
          <Route path="/orders" component={OrderList} />
          <Route path="/customer/new" component={CustomerForm} />
          <Route path="/order/new" component={OrderForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
