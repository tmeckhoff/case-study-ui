import catalogEntryItems from '../App/routes/CatalogEntry/item-data.json';

const TIMEOUT = 100;

export default {
  getCatalogEntry: (cb, timeout) => setTimeout(() => cb(catalogEntryItems), timeout || TIMEOUT)
}