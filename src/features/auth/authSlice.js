import { createSlice } from "@reduxjs/toolkit";

// Could be destructured as : const { actions, reducer } = createSlice({ })
// createSlice function returns an object with the properties : name, reducer, actions
/**
 * The slice for user authentication
 */
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logOut: (state, action) => {
      state.user = null;
      state.token= null;
    }
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
