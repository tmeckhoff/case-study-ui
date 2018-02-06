import React, { Component } from 'react';
import './App.scss';
import * as routes from './routes';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './state/reducer';
import items from './routes/CatalogEntry/item-data.json';

const middleware = [ thunk ];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer, {items: items},
  applyMiddleware(...middleware)
);

class App extends Component {


    render() {
            return (
  <Provider store={store}>
  <MuiThemeProvider>
  <div>
  <h1>myRetail</h1>
    <main>
    <BrowserRouter>
      <Route path="/" component={routes.CatalogEntry} />
      </BrowserRouter>
    </main>
  </div>
  </MuiThemeProvider>
  </Provider>
);
}

}


export default App;