import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/globalTypes";

interface IWish {
  wishList: IBook[];
  total: number;
}

const initialState: IWish = {
  wishList: [],
  total: 0,
};

const wishSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<IBook>) => {
      const existing = state.wishList.find(
        (wish) => wish._id === action.payload._id
      );
      if (existing) {
        console.log("Test")
      } else {
        state.wishList.push({ ...action.payload });
      }
    },
  },
});

export const { addToWishList } = wishSlice.actions;

export default wishSlice.reducer;
