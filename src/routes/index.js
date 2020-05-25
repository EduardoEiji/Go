import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

import Dashboard2 from '../pages/Dashboard/dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/dashdududoido" component={Dashboard2} />
      {/* //Exemplo , porem nao sera utilizado na aula */}
      {/* <Route path="/" component={() => <h1>404</h1>} /> */}
    </Switch>
  );
}
