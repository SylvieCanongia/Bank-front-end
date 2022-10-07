// It's an extended slice so we import the apiSlice
import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    // first endpoint is login
    login: builder.mutation({
      query: credentials => ({
        url: '/login',
        method: 'POST',
        body: { ...credentials}
      })
    }),
  })
})