import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const productSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const findindex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (findindex >= 0) {
        state.carts[findindex].qty += 1;
      } else {
        const newentry = { ...action.payload, qty: 1 };
        state.carts = [...state.carts, newentry];
      }
    },
    remove: (state, action) => {
      const removeindex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[removeindex].qty > 1) {
        state.carts[removeindex].qty -= 1;
      }
    },
    removeall: (state, action) => {
      const data = state.carts.filter((x) => x.id !== action.payload.id);
      state.carts = data;
    },
  },
});

export const selectcart = (state) => state.prod.carts;

export const { addtocart, remove, removeall } = productSlice.actions;

export default productSlice.reducer;
