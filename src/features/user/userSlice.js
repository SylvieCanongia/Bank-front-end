import { createSlice } from "@reduxjs/toolkit";
import { userLogin, getUserProfile } from "./userActions";

// initialize token from local storage
const token = localStorage.getItem('token')
? localStorage.getItem('token')
: null;

const initialState = {
  loading: false,
  userInfo: null, // for user object
  firstName: null,
  lastName: null,
  token, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process,
  editHeader: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token') // deletes token from storage
      state.loading = false
      state.userInfo = null
      state.token = null
      state.error = null
      state.firstName = null
      state.lastName = null
    },
    editHeader: (state) => {
      state.editHeader = true;
    },
    closeEditHeader: (state) => {
      state.editHeader = false;
    }
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
      state.token = payload.body.token
      // console.log(payload.body.token)
      console.log(state.token)
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
      console.log(payload)
      state.loading = false
      state.userInfo = payload
      state.firstName = payload.body.firstName
      state.lastName = payload.body.lastName
    },
    [getUserProfile.rejected]: (state, { payload }) => {
      state.loading = false
    },
  },
})

export const { logout, editHeader, closeEditHeader } = userSlice.actions
export default userSlice.reducer;