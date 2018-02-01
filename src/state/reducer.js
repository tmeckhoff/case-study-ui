import { combineReducers } from 'redux';
import * as actions from './actions';

const initialState = {
  catalogEntryView: []
};

const catalogEntryViewItems = (state = initialState.catalogEntryView, action) => {
  switch (action.type) {
    case 'GET_CATALOG_ENTRY_VIEW':
      return [
        ...state,
        {
          catalogEntryView: action
        }
      ]
    default:
      return state
  }
};


const appReducer = combineReducers({
  catalogEntryViewItems
});

export default appReducer;