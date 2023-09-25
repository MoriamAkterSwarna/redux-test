import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./features/counter/CounterSlice";
// import logger from "redux-logger";//3rd party logger

import logger from "./middleware/logger";
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
