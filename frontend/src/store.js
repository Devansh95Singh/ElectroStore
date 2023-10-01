import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./APISlices/baseAPISlice";
import cartSliceReducer from "./APISlices/cartSlice";
import authSlice from "./APISlices/authSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
