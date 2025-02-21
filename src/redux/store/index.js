import { combineReducers, configureStore } from "@reduxjs/toolkit";
import albumReducer from "../reducers/";

const rootReducer = combineReducers({
  album: albumReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
