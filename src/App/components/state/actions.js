import requests from './requests';

export const GET_ITEMS = 'GET_ITEMS';


const getCatalogItems = items => ({
  type: GET_ITEMS,
  items
})


export const getAllCatalogItems = () => dispatch => {
  requests.getItemsData(items => {
    dispatch(getCatalogItems(items))
  })
}
