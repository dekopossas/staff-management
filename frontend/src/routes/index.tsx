import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" exact component={ Home } />
      <Route path="/home" exact component={ Home } />
    </Switch>
  );
};

export default Routes;
