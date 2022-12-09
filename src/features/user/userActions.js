import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = 'http://www.localhost:3001'

export const userLogin = createAsyncThunk(
  `${backendURL}/user/login`,
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
      // store user's token in local storage
      localStorage.setItem('userToken', data.userToken)
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