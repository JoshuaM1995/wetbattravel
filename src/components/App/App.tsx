import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Container} from '@material-ui/core';
import Navigation from '../Navigation/Navigation';
import Dashboard from '../Dashboard/Dashboard';
import NotFound from '../NotFound/NotFound';
import './App.scss';

const App = () => {
  return (
    <>
      <Navigation/>
      <Container className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
