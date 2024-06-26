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
      const first = state.cart.find((item) => item.name === action.payload);

      state.cart = state.cart.filter((item) => item.id !== first.id);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addData, deleteData, clearCart } = cartSlice.actions;
export default cartSlice;
