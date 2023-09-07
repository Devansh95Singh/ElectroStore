import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { cartItems: [] };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existItem = state.cartItems.find(i => i._id === item._id);
      if (existItem) {
        state.cartItems = state.cartItems.map((x) => x._id === existItem._id ? item : x)
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      state.itemsPrice = state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

      state.shippingPrice = state.itemsPrice > 100 ? 10 : 0;

      state.taxPrice = state.itemsPrice * 0.15;

      state.totalPrice = (Number(state.itemsPrice) + Number(state.shippingPrice) + Number(state.taxPrice)).toFixed(2);

      localStorage.setItem('cart', state);
    }
  },
});

export const { addToCart } = cartSlice.actions; 
export default cartSlice.reducer;
