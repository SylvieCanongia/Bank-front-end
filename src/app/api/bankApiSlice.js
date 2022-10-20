// 'createApi() is the core of Redux Toolkit Query's functionality.
// It allows you to define a set of endpoints describe how to retrieve data from a series of endpoints,
//  including configuration of how to fetch and transform that data.


/* '@reduxjs/toolkit/query/react' is React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials } from '../../features/auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  // 'credentials' sends our secure cookie http only in each request
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {

    const token = getState().auth.token;
    if(token) {
      // If we have a token set in state, we pass it into authorization
      headers.set("authorization", `Bearer ${token}`)
    }

    const user = getState().auth.user;
    // store the token
    setCredentials({ user });

    return headers
  }
})

/**
 * Defines the "API slice", which is a service that uses the server's base URL
 * and expected endpoints.
 * Initialize an empty api service that we'll inject endpoints into later as needed
 */
export const bankApiSlice = createApi({
  reducerPath: 'bankApiSlice',
  baseQuery: baseQuery,
  // we'll use extended api slices (see src/features/auth/authApiSlice.js) so we can specify what belongs to the auth
  // and what belongs to other parts or other features of the application
  endpoints: builder => ({})
})
