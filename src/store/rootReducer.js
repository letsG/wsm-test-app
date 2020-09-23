import { combineReducers } from "redux";
import albumsStore from "store/searchAlbums/reducer";
import favoritesStore from "store/favoriteAlbums/reducer";

const rootReducer = combineReducers({
  albumsStore,
  favoritesStore,
});

export default rootReducer;
