// import { combineReducers } from 'redux'
import { Types } from '../constants/actionTypes'

// Initial state
const initialState = {
  id: "",
  email: "",
  password: "",
  firstName: "Toto",
  lastName: "Test"
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case Types.CREATE_USER:
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      }
    case Types.LOGIN_USER:
      console.log('login', action.payload.user)
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        password: action.payload.password,
      }
    case Types.GET_USER_PROFILE:
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        password: action.payload.password,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      }
      case Types.UPDATE_USER:
        return {
          ...state,
          id: action.payload.id,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName
      }
      case Types.UPDATE_USER_FIRST_AND_LASTNAME:
        return {
          ...state,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName
      }
      case Types.CANCEL_USER_FIRST_AND_LASTNAME:
        return state;
    default:
      return state
  }
}

export default reducer;

// const rootReducer = combineReducers({
//   user: userReducer
// })

// export default rootReducer;