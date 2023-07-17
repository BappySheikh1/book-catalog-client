import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/globalTypes";

interface IWish {
  wishList: IBook[];
  readBooks: IBook[];
}

const initialState: IWish = {
  wishList: [],
  readBooks: [],
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
        console.log("Test");
      } else {
        state.wishList.push({ ...action.payload });
      }
    },
    addToReadBook: (state, action: PayloadAction<IBook>) => {
      state.wishList = state.wishList.filter(
        (wish) => wish._id !== action.payload._id
      );
     
        state.readBooks.push(action.payload);
      
    },
    removeFromReadBook: (state, action: PayloadAction<IBook>) => {
     state.readBooks = state.readBooks.filter((wish) => wish._id !== action.payload._id);
    },
  },
});

export const { addToWishList,removeFromReadBook,addToReadBook } = wishSlice.actions;

export default wishSlice.reducer;
