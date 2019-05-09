import '@babel/polyfill';
import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { routes } from './routes/syncRoutes';

import './app.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      {renderRoutes(routes)}
    </Router>
  </ApolloProvider>
);

export default App;
