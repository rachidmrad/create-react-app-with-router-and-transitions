// src/routes.js
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Layout from './layout';
import Work from './components/Work';
import Work1 from './components/Work1';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Layout}>
      <IndexRoute component={About}/>
      <Route path="/Work" component={Work} />
      <Route path="/cup" component={Work1} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
