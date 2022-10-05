// Actions creators

export const createUser = (email, password, firstName, lastName) => ({
  type: "CREATE_USER",
  email,
  password,
  firstName,
  lastName
});

export const loginUser = (id, email, password) => ({
  type: "LOGIN_USER",
  id,
  email,
  password
});

export const getUserProfile = (id) => ({
  type: "GET_USER_PROFILE",
  id
});

export const updateUserProfile = (id, firstName, lastName) => ({
  type: "UPDATE_USER_PROFILE",
  id,
  firstName,
  lastName
});