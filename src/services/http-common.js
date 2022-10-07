import axios from "axios";

/**
 * Creates an instance of Axios on port 3000
 * @module axiosInstance
 */
export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-type": "application/json"
    }
});