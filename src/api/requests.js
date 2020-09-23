import request from "./axios";
import { ROWS_PER_PAGE } from "utils/constants";

const searchAlbums = async (searchString, page) => {
  try {
    const requestedOffset = ROWS_PER_PAGE * (page - 1);
    const { releases: data, count: total = 0, offset = 0 } = await request({
      method: "GET",
      url: `/release/?query=primarytype:album+title:${searchString.trim()}&limit=${ROWS_PER_PAGE}&offset=${requestedOffset}`,
    });
    return { data, total, offset };
  } catch (error) {
    return { data: [], error };
  }
};

export { searchAlbums };
