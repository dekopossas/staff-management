import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateEmployee from '../pages/CreateEmployee';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/create-employee" exact component={ CreateEmployee } />
    </Switch>
  );
};

export default Routes;
