import {createSlice} from '@reduxjs/toolkit';

export interface AuthState {
  status: 'checking' | 'unauthenticated' | 'authenticated';
  uid: string | null;
  email: string | null;
  displayName: string | null;
  profilePic: string | null;
  errorMessage: string | null;
}

const initialState: AuthState = {
  status: 'checking',
  uid: null,
  email: null,
  displayName: null,
  profilePic: null,
  errorMessage: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, {payload}) => {
      state.status = 'authenticated';
      state.uid = payload.uid;
      state.email = payload.email;
      state.displayName = payload.displayName;
      state.profilePic = payload.profilePic;
      state.errorMessage = payload.errorMessage;
    },
    logout: (state, {payload}) => {
      state.status = 'unauthenticated';
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.profilePic = null;
      state.errorMessage = payload.errorMessage;
    },
    loading: state => {
      state.status = 'checking';
      console.log(state);
      console.log('loading');
    },
  },
});

export const {login, logout, loading} = authSlice.actions;

export default authSlice.reducer;
 