import { APPLY_SEARCH_RESULTS } from "./actionNames";

const { searchAlbums } = require("api/requests");

export const setSearchResultsAction = (searchString = "") => async (
  dispatch
) => {
  if (searchString) {
    const data = (await searchAlbums(searchString)) || [];
    dispatch({
      type: APPLY_SEARCH_RESULTS,
      data,
    });
  }
};
