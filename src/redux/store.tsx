import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import BookReducer from "./features/book/BookSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    book : BookReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
