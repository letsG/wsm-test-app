import { ADD_FAVORITE_ALBUM, DELETE_FAVORITE_ALBUM } from "./actionNames";

const initialStore = () => ({
  favoritesArray: [],
  favoritesNormalized: {},
});

const addToFavorites = (store, album) => {
  const { favoritesArray } = store;
  let { favoritesNormalized } = store;
  favoritesArray.concat(album);
  favoritesNormalized = { ...favoritesNormalized, [album.id]: album };
  return { favoritesArray, favoritesNormalized };
};

const removeFromFavorites = (store, album) => {
  const { favoritesArray } = store;
  let { favoritesNormalized } = store;
  const deleteAlbumIndex = favoritesArray.findIndex(
    (deleteAlbum) => deleteAlbum.id === album.id
  );
  favoritesArray.splice(deleteAlbumIndex, 1);
  favoritesNormalized = { ...favoritesNormalized, [album.id]: undefined };
  return { favoritesArray, favoritesNormalized };
};

export default (store = initialStore(), { type, data } = {}) => {
  switch (type) {
    case ADD_FAVORITE_ALBUM:
      return addToFavorites(store, data);

    case DELETE_FAVORITE_ALBUM:
      return removeFromFavorites(store, data);

    default:
      return store;
  }
};
