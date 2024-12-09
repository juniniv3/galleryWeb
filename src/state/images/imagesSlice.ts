import { createSlice } from "@reduxjs/toolkit";

export interface Image {
  id: string;
  name: string;
  description: string;
  url: string;
}
export interface ImagesState {
  images: Image[];
  loading: boolean;
  errorMessage: string;
}

const initialState: ImagesState = {
  loading: false,
  images: [],
  errorMessage: "",
};

export const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    addImage: (state, { payload }) => {
      state.images.push(payload);
    },
    removeImage: (state, { payload }) => {
      state.images = state.images.filter((image) => image.id !== payload);
    },
    loadingImages: (state) => {
      state.loading = true;
    },
    loadImagesSuccess: (state, { payload }) => {
      state.loading = false;
      state.images = payload;
    },
    loadImagesError: (state, { payload }) => {
      state.loading = false;
      state.images = payload.errorMessage;
    },
  },
});

export const {
  addImage,
  removeImage,
  loadingImages,
  loadImagesSuccess,
  loadImagesError,
} = imageSlice.actions;

export default imageSlice.reducer;