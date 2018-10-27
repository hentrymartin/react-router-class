import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomeComponent from './HomeComponent';
import StudentsComponent from './Component/StudentsComponent';

function Routes() {
  return (
    <div className="my-routes">
      <Router>
        <Switch>
          <Route path="/users" component={HomeComponent} />
          <Route path="/students" component={StudentsComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
