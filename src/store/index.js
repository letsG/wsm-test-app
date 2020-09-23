import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favoritesStore"],
};

const middleware = [thunk];

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composed = compose(applyMiddleware(...middleware));

export default () => {
  const store = createStore(persistedReducer, {}, composed);
  return { store, persistor: persistStore(store) };
};
