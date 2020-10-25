import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Container} from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Navigation from '../Navigation/Navigation';
import Dashboard from '../Dashboard/Dashboard';
import NotFound from '../NotFound/NotFound';
import ViewQuote from "../Quotes/ViewQuote";
import './App.scss';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#5F6CAF',
    },
    secondary: {
      main: '#5BBFBA',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
