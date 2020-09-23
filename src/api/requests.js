import request from "./axios";
import { ROWS_PER_PAGE } from "utils/constants";

const searchAlbums = async (searchString, page) => {
  const requestedOffset = ROWS_PER_PAGE * (page - 1);
  const { releases: data, count: total = 0, offset = 0 } = await request({
    method: "GET",
    url: `/release/?query=primarytype:album${searchString.trim()}&limit=${ROWS_PER_PAGE}&offset=${requestedOffset}`,
  });
  return { data, total, offset };
};

export { searchAlbums };
