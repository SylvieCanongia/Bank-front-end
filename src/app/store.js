import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "../features/userSlice";
import { apiSlice } from './api/apiSlice';
import authReducer from '../features/auth/authSlice'

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    // user: userReducer
  },
  // middleware for set in cache the results and other things
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
    // Set devtools to false in production
    devTools: true
})