import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import BookReducer from "./features/book/BookSlice";
import api from "./api/apiSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    book: BookReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
