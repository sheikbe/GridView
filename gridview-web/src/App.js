import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GridView from './components/GridView';
import EditOrders from './components/EditOrders';
import RowCommand1 from './components/RowCommand1';
import RowCommand2 from './components/RowCommand2';
import RowDataBound from './components/RowDataBound';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/edit-orders" component={EditOrders} />
          <Route path="/row-command-1" component={RowCommand1} />
          <Route path="/row-command-2" component={RowCommand2} />
          <Route path="/row-data-bound" component={RowDataBound} />
          <Route path="/" component={GridView} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
