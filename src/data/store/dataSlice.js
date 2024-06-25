import { createSlice } from "@reduxjs/toolkit";
import dataItems from "../feeds.json";

const data = createSlice({
  name: "data",
  initialState: {
    data: dataItems,
  },
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addData } = data.actions;
export default data;
