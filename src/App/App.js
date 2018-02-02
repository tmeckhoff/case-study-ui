import React, { Component } from 'react';
import './App.scss';
import CatalogEntry from './components/CatalogEntry';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {


    render() {
            return (
  <div>
  <h1>myRetail</h1>
    <main>
    <BrowserRouter>
      <Route path="/" component={CatalogEntry} />
      </BrowserRouter>
    </main>
  </div>
);
}

}


export default App;