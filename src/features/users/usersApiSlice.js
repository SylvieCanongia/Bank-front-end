import { bankApiSlice } from "../../app/api/bankApiSlice";

export const usersApiSlice = bankApiSlice.injectEndpoints({
  endpoints: builder => ({
    getUserProfile: builder.query({
      query: () => '/profile'
    })
  })
});

export const {
  useGetUserProfileQuery
} = usersApiSlice;