import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import BookReducer from "./features/book/BookSlice";
import api from "./api/apiSlice";
import wishListReducer from "./features/wishList/wishList.Slice";


const store = configureStore({
  reducer: {
    user: userReducer,
    book: BookReducer,
    wish: wishListReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
