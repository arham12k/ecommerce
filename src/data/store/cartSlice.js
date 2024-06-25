import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addData: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    deleteData: (state, action) => {
      console.log(action.payload);

      state.cart = state.cart.filter((item) => item.name !== action.payload);
      console.log(state.cart);
    },
    clearCart: (state) => {
      state.cart = [];
      console.log(state.cart);
    },
  },
});

export const { addData, deleteData, clearCart } = cartSlice.actions;
export default cartSlice;
