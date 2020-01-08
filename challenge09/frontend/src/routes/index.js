import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import Students from '../pages/Students';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />

      <Route path="/students" component={Students} isPrivate />
      {/* <Route path="/students/:id" component={Students} isPrivate /> */}
      <Route path="/" component={() => <h1>Error 404</h1>} />
    </Switch>
  );
}
