import request from "./axios";

const searchAlbums = async (searchString) => {
  const limit = 25;
  const { releases: data, count: total = 0, offset = 0 } = await request({
    method: "GET",
    url: `/release/?query=primarytype:album${searchString.trim()}&limit=${limit}`,
  });
  return { data, total, offset };
};

export { searchAlbums };
