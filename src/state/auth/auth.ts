import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  status: "unauthenticated" | "loading" | "authenticated";
  uid: string;
  errorMessage: string;
  displayName: string;
  email: string;
  profilePic: string;
}

const initialState: AuthState = {
  status: "unauthenticated",
  uid: "",
  errorMessage: "",
  displayName: "",
  email: "",
  profilePic: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loading: (state) => {
      state.status = "loading";
    },
    logIn: (state, { payload }) => {
      state.uid = payload.uid;
      state.displayName = payload.displayName;
      state.email = payload.email;
      state.profilePic = payload.profilePic;
      state.status = "authenticated";
    },
    logOut: (state) => {
      state.status = "unauthenticated";
      state.uid = "";
      state.displayName = "";
      state.email = "";
      state.profilePic = "";
    },
  },
});

export const { loading, logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
