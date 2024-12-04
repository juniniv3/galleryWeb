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
    error: string;
} 


const initialState: ImagesState = {
    loading: false,
    images: [],
    error: "",
}


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
    },
});
