import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateEmployee from '../pages/CreateEmployee';
import EditEmployee from '../pages/EditEmployee';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={ Home } />
      <Route path="/create-employee" exact component={ CreateEmployee } />
      <Route path="/edit-employee/:id" exact component={ EditEmployee } />
    </Switch>
  );
};

export default Routes;
