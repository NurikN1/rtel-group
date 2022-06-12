import { configureStore } from '@reduxjs/toolkit';
import isAuthorizedReducer from './slices/isAuthorizedSlice';

export const store = configureStore({
  reducer: {
    isAuthorized: isAuthorizedReducer,
  },
});
