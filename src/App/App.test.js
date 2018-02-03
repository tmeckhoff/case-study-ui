import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CatalogEntry from './components/CatalogEntry';
import Slider from './components/Slider';

it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App  />, div);
});

it('renders Slider without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Slider />, div);
});

it('renders Catalog without crashing', () => {
  const div = document.createElement('div');
    const props = {
	items: PropTypes.object,
  	getItemsData: PropTypes.func
  };
  ReactDOM.render(<CatalogEntry  {...props} />, div);
});