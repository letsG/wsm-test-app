import { APPLY_SEARCH_RESULTS } from "./actionNames";

const initialStore = () => ({
  searchedAlbumsArray: [],
  total: 0,
  offset: 0,
});

export default (store = initialStore(), { type, data, total, offset } = {}) => {
  switch (type) {
    case APPLY_SEARCH_RESULTS:
      return {
        ...store,
        searchedAlbumsArray: data,
        total: total,
      };
    default:
      return store;
  }
};
