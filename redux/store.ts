import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userReducer";

export const store = configureStore({
  reducer: {
    userId: userReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;