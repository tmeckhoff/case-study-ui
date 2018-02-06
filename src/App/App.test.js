import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {CatalogEntry} from './routes/CatalogEntry';
import Slider from './components/Slider';
import * as enzyme from 'enzyme';
import {shallow} from 'enzyme';
const EnzymeAdapter = require('enzyme-adapter-react-15');
import { getAllCatalogItems } from './state/actions';

enzyme.configure({adapter: new EnzymeAdapter()});

it('renders App without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App  />, div);
});

it('renders Slider without crashing and finds slider', () => {
   const props = {images: ["image1"]};
   const wrapper = shallow(<Slider {...props} />);
    expect(wrapper.find('#slider').length).toEqual(1);
});

it('renders Catalog without crashing and finds title and price ', () => {
  const props = {items: {"items": ["CatalogEntryView"]}, getItemsData: items => getAllCatalogItems() };
  const wrapper = shallow(<CatalogEntry {...props} />);
  expect(wrapper.find('#title').length).toEqual(1);
  expect(wrapper.find('#price').length).toEqual(1);
});