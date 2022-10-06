import { Types } from "../constants/actionTypes";

// Actions creators

export const createUser = (user) => ({
  type: Types.CREATE_USER,
  payload: { user }
});

export const loginUser = (user) => ({
  type: Types.LOGIN_USER,
  payload: { user }
});

export const getUserProfile = (id) => ({
  type: Types.GET_USER_PROFILE,
  payload: { id }
});

export const updateUserProfile = (user) => ({
  type: Types.UPDATE_USER_PROFILE,
  payload: { user }
});

export const cancelUpdateUserProfile = () => ({
  type: Types.CANCEL_UPDATE_USER_PROFILE,
});

// export const updateUserFirstAndLastName = ( firstAndLastName ) => ({
//   type: Types.UPDATE_USER_FIRST_AND_LASTNAME,
//   payload: { firstAndLastName }
// });

// export const cancelUserFirstAndLastName = () => ({
//   type: Types.CANCEL_USER_FIRST_AND_LASTNAME,
// });