import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Container} from '@material-ui/core';
import Navigation from '../Navigation/Navigation';
import Dashboard from '../Dashboard/Dashboard';
import NotFound from '../NotFound/NotFound';
import './App.scss';
import ViewQuote from "../Quotes/ViewQuote";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation/>

        <Container className="container">
          <Switch>
            <Route exact path="/" component={Dashboard}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/quote/:id" component={ViewQuote}/>
            <Route path="*" component={NotFound}/>
          </Switch>
        </Container>
      </BrowserRouter>
    </>
  )
    ;
}

export default App;
