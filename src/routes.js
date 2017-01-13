// src/routes.js
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Layout from './layout';
import Works from './components/Works';
import About from './components/About';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Works}/>
      <Route path="/about" component={About} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
