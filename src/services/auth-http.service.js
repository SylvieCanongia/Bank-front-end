import { axiosInstance } from "../http-common";

/**
 * Send custom request using Axios instance.
 * Logs the user and save JWT to LocalStorage.
 * @param { Integer } userId 
 * @returns { promise } Promise
 */
 export async function loginUser(email, password) {
	try {
    const response = await axiosInstance.post(`user/login`, {
			email: email,
			password: password
		});
		const data = response.data;
		console.log(response.data)
    return data;
	}
	catch (error) {
		console.log(error);
	}
}

/**
 * Send custom request using Axios instance.
 * Logs the user and save JWT to LocalStorage.
 * @param { Integer } userId 
 * @returns { promise } Promise
 */
 export async function getUserProfile() {
	try {
    const response = await axiosInstance.get(`user/login`);
		const data = response.data;
		console.log(response.data)
    return data;
	}
	catch (error) {
		console.log(error);
	}
}

// /**
//  * Send custom request using Axios instance.
//  * Retrieves information from a user. Includes the user id, user information
//  * (first name, last name and age), the current day's score (todayScore)
//  * and key data (calorie, macronutrient, etc.).
//  * @param { Integer } userId 
//  * @returns { promise } Promise
//  */
//  export async function getUserMainData(userId) {
// 	try {
//     const response = await axiosInstance.get(`user/${userId}`);
// 		const data = response.data;
//     return data;
// 	}
// 	catch (error) {
// 		console.log(error);
// 	}
// }

