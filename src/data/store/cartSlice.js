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
      return (state.cart.length = 0);
    },
  },
});

export const { addData, deleteData, clearCart } = cartSlice.actions;
export default cartSlice;
