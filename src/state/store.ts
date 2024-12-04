import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/auth";
import { imageSlice } from "./images/images";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    images: imageSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
