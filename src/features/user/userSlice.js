import { createSlice } from "@reduxjs/toolkit";
import { userLogin, getUserProfile } from "./userActions";

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
? localStorage.getItem('userToken')
: null;

const initialState = {
  loading: false,
  userInfo: null, // for user object
  userToken, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken') // deletes token from storage
      state.loading = false
      state.userInfo = null
      state.userToken = null
      state.error = null
    },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.userToken
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // get user details
    [getUserProfile.pending]: (state) => {
      state.loading = true
    },
    [getUserProfile.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
    },
    [getUserProfile.rejected]: (state, { payload }) => {
      state.loading = false
    },
  },
})

export const { logout } = userSlice.actions
export default userSlice.reducer;