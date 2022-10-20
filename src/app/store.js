import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "../../designs/css/userSlice";
import { bankApiSlice } from './api/bankApiSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    // Add the bankApiSlice generated reducer as a specific top-level slice (=login with query)
    [bankApiSlice.reducerPath]: bankApiSlice.reducer,
    //  slice for setting credentials and logout
    auth: authReducer,
    // user: userReducer
  },
  // the api "middleware" enables to add some custom middlewares
  middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware allows to add some custom middlewares + keeping the default Redux middlewares
  //  (catching the results and other features of 'rtk-query' (thunk for managing asynchronous actions, polling, ...))
    getDefaultMiddleware().concat(bankApiSlice.middleware),
    // Be careful to set devtools to false in production
    devTools: true
})

// It is preferable to use the chainable .concat(...) and .prepend(...) methods of the returned MiddlewareArray
// instead of the array spread operator ( ...getDefaultMiddleware(),), as the latter can lose valuable type information under some circumstances.

// Polling gives you the ability to have a 'real-time' effect by causing a query to run at a specified interval.
// For more information see at : https://async-transformresponse--rtk-query-docs.netlify.app/concepts/polling/#polling