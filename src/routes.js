// src/routes.js
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Layout from './layout';
import Work from './components/Work';
import Work1 from './components/Work1';
import Work2 from './components/Work2';
import Work3 from './components/Work3';
import Work4 from './components/Work4';
import Work5 from './components/Work5';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Layout}>
      <IndexRoute component={About}/>
      <Route path="/Work" component={Work} />
      <Route path="/cup" component={Work1} />
      <Route path="/energytomorrow" component={Work2} />
      <Route path="/api" component={Work3} />
      <Route path="/packart" component={Work4} />
      <Route path="/energytogether" component={Work5} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
