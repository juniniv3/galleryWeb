import { configureStore } from "@reduxjs/toolkit";
import { imageSlice } from "./images/imagesSlice";
import { authSlice } from "./auth";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    images: imageSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
