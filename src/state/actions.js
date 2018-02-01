import requests from './requests';

export const GET_CATALOG_ENTRY_VIEW = 'GET_CATALOG_ENTRY_VIEW';

const getItems = items => ({
  type: GET_CATALOG_ENTRY_VIEW,
  items
});

export const getAllItems = () => dispatch => {
  requests.getCatalogEntry(items => {
    dispatch(getItems(items))
  })
};