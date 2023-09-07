import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./APISlices/baseAPISlice";
import cartSliceReducer from "./APISlices/cartSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
