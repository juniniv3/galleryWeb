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
    loadingImages: (state) => {
      state.loading = true;
    },
    addImage: (state, { payload }) => {
      state.images.push(payload);
      state.loading = false;
    },
    updateImageSuccess: (state, { payload }) => {
      state.loading = false;
      state.images = state.images.map((image) =>
        image.id === payload.id ? payload : image
      );
    },
    deleteImageSuccess: (state, { payload }) => {
      state.loading = false;
      state.images = state.images.filter((image) => image.id !== payload);
    },

    loadImagesSuccess: (state, { payload }) => {
      state.loading = false;
      state.images = payload.data;
    },
    loadImagesError: (state, { payload }) => {
      state.loading = false;
      state.images = payload.errorMessage;
    },
  },
});

export const {
  addImage,
  updateImageSuccess,
  deleteImageSuccess,
  loadingImages,
  loadImagesSuccess,
  loadImagesError,
} = imageSlice.actions;

export default imageSlice.reducer;
