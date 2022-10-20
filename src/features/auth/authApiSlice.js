// It's an extended slice so we import the apiSlice
import { bankApiSlice } from "../../app/api/bankApiSlice";

// injectEndpoints() function injects additional endpoints into the empty bankApiSlice
export const authApiSlice = bankApiSlice.injectEndpoints({
  endpoints: builder => ({
    // first endpoint is login
    login: builder.mutation({
      query: credentials => ({
        // url: '/login',
        url: 'login',
        method: 'POST',
        body: { ...credentials}
      })
    }),
  })
})

export const {
  // Hook automatically generated
  // also generates queries. They always start with use and if it's a mutation it ends with mutation
  //  and if it's a query it ends with query
  useLoginMutation
} = authApiSlice;