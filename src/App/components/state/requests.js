import items from '../CatalogEntry/item-data.json';

const TIMEOUT = 100;

export default {
  getItemsData: (cb, timeout) => setTimeout(() => cb(items), timeout || TIMEOUT)
}
