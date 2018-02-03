import React, { Component } from 'react';
import './App.scss';
import CatalogEntry from './components/CatalogEntry';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {


    render() {
            return (
  <MuiThemeProvider>
  <div>
  <h1>myRetail</h1>
    <main>
    <BrowserRouter>
      <Route path="/" component={CatalogEntry} />
      </BrowserRouter>
    </main>
  </div>
  </MuiThemeProvider>
);
}

}


export default App;