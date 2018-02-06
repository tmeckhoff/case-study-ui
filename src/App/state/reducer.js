import { combineReducers } from 'redux';
import { GET_ITEMS } from './actions';

const initialState = {
	items: {}
};

const itemsReducer = (state = initialState.items, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {...state, items: action.items}
    default:
      return state
  }
}

export default combineReducers({
 items: itemsReducer
})