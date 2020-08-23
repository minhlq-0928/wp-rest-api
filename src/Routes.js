/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';

const Routes = () => {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/post/:id" component={PostDetail} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default Routes;
