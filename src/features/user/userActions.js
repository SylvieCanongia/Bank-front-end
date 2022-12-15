import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = 'http://www.localhost:3001'

export const userLogin = createAsyncThunk(
  `user/login`,
  async ({ email, password }, { rejectWithValue }) => {
    try {
      //  configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      const { data } = await axios.post(
        `${backendURL}/api/v1/user/login`,
        { email, password },
        config
      )
      console.log(data);

      // store user's token in local storage
      localStorage.setItem('token', data.body.token)
      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const getUserProfile = createAsyncThunk(
  'user/getUserProfile',
  async ( arg, { getState, rejectWithValue }) => {
    try {
      // get user data from store
      const { user } = getState();
      console.log(user);
      // console.log(user.token);

      // configure authorization header with user's token
      // const config = {
      //   headers: {
      //     'Authorization': `Bearer ${user.token}`,
      //     'Content-Type': 'application/json',
      //   },
      // }
      // console.log(config)
      
      // const { data } = await axios.post(
      // `${backendURL}/api/v1/user/profile`,
      // config
      // )

      const { data } = await axios({
        method: 'post',
        url: `${backendURL}/api/v1/user/profile`,
        headers: {
          'Authorization': `Bearer ${user.token}`,
          'Content-Type': 'application/json',
        },
      })

      // console.log(data)
      // console.log(config)
      return data

    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)