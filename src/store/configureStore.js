import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "./common";
import statsReducer from "./stats";

const rootReducer = {
  common: commonReducer,
  stats: statsReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
