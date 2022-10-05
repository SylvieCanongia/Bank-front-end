// import { combineReducers } from 'redux'
import { createUser, loginUser, getUserProfile, updateUserProfile } from './actionCreators'

// Initial state
const initialState = {
  id: "",
  email: "",
  password: "",
  firstName: "",
  lastName: ""
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case "CREATE_USER":
      return {
        ...state,
        email: action.email,
        password: action.password,
        firstName: action.firstName,
        lastName: action.lastName
      }
    case "LOGIN_USER":
      return {
        ...state,
        id: action.id,
        email: action.email,
        password: action.password,
      }
    case "GET_USER_PROFILE":
      return {
        ...state,
        id: action.id,
        email: action.email,
        password: action.password,
        firstName: action.firstName,
        lastName: action.lastName
      }
      case "UPDATE_USER_PROFILE":
        return {
          ...state,
          id: action.id,
          firstName: action.firstName,
          lastName: action.lastName
        }
    default:
      return state
  }
}

export { reducer, initialState };

// const rootReducer = combineReducers({
//   user: userReducer
// })

// export default rootReducer;