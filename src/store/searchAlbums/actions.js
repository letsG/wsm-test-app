import { APPLY_SEARCH_RESULTS } from "./actionNames";

const { searchAlbums } = require("api/requests");

export const setSearchResultsAction = (searchString = "", page) => async (
  dispatch
) => {
  if (searchString) {
    const { data = [], total = 0, offset = 0 } = await searchAlbums(
      searchString,
      page
    );
    dispatch({
      type: APPLY_SEARCH_RESULTS,
      data,
      total,
      offset,
    });
  }
};
