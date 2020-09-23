import a from "axios";

export default async ({
  method = "GET",
  // baseUrl = "https://musicbrainz.org/ws/2/",
  baseUrl = "https://cors-anywhere.herokuapp.com/https://musicbrainz.org/ws/2/",
  url = "",
  params = {},
  headers = {
    "Access-Control-Allow-Origin": "*",
  },
  data = {},
  spinner = false,
}) => {
  try {
    // if (spinner) {
    //   store.dispatch(updateSpinnerStatus(true));
    // }
    const { data: res } = await a({
      method,
      url: `${baseUrl}${url}`,
      params,
      data,
      headers,
    });
    return res;
    // eslint-disable-next-line no-useless-catch
  } catch (err) {
    return err.response?.data || {};
  } finally {
    // if (spinner) {
    //   store.dispatch(updateSpinnerStatus(false));
    // }
  }
};
