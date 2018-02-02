import { combineReducers } from 'redux'
import { GET_ITEMS } from './actions';

const initialState = {
  catalogItems: []
}

const itemsReducer = (state = initialState.catalogItems, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return [ ...state, action.items ]
    default:
      return state
  }
}

export default combineReducers({
 itemsReducer
})