import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  // 'credentials' sends our secure cookie http only in each request
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if(token) {
      // sends token into authorization
      headers.set("authorization", `Bearer ${token}`)
    }
    return headers
  }
})

// Creates a wrapper for our baseQuery (custom query function)
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  // back end will send a 403 (or 401) error code if the token as expired or another error :
  // optionnal chaining :
  if (result?.error?.originalStatus === 403) {
    console.log('Sending refresh token');
    // Send refresh token to get new access token
    const refreshResult = await baseQueryWithReauth('/refresh', api, extraOptions)
    console.log(refreshResult);
    if (refreshResult?.data) {
      // Get the user into the state
      const user = api.getState().auth.user
      // store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      // retry the original query with the new access token
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logOut());
    }
  }

  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  // we'll use extended api slices so we can specify what belongs to the auth
  // and what belongs to other parts or other features of the application
  endpoints: builder => ({})
})
