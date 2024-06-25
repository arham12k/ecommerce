import { configureStore } from "@reduxjs/toolkit";

import data from "../store/dataSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    data: data.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;
