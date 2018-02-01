import React, { Component } from 'react';
import './App.scss';
import * as routes from './routes';
import { BrowserRouter, Route } from 'react-router-dom';
import { getAllItems } from '../state/actions';

class App extends Component {


    render() {
            return (
  <div>
  <h3>myRetail</h3>
    <main>
    <BrowserRouter>
      <Route exact path="/" component={routes.CatalogEntry} />
      </BrowserRouter>
    </main>
  </div>
);
}

}

export default App;
