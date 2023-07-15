import { createSlice } from "@reduxjs/toolkit";

interface IBooks {
  books: string[];
}

const initialState: IBooks = {
  books: [],
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
});


export default bookSlice.reducer