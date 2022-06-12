import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: !!localStorage.getItem('isAuthorized'),
};

export const isAuthorizedSlice = createSlice({
  name: 'isAuthorized',
  initialState,
  reducers: {
    login: (state) => {
      state.value = true;
      localStorage.setItem('isAuthorized', true);
    },
    logout: (state) => {
      state.value = false;
      localStorage.removeItem('isAuthorized');
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = isAuthorizedSlice.actions;

export default isAuthorizedSlice.reducer;
