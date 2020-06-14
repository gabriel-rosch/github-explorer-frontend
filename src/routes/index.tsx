import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Deshboard';
import User from '../pages/User';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/user/:login" component={User} />
  </Switch>
);

export default Routes;
