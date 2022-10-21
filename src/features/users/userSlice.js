// const initialState = {
//   name: 'user',
//   initialState: {
//     id: "",
//     email: "",
//     password: "",
//     firstName: "",
//     lastName: ""
//   },
//   reducers: {
//     createUser: (state, action) => {
//       state.email = action.payload.email;
//       state.password = action.payload.password;
//       state.firstName = action.payload.firstName;
//       state.lastName = action.payload.lastName;
//     },
//     loginUser: (state, action) => {
//       state.email = action.payload.email;
//       state.password = action.payload.password;
//     },
//     getUserProfile: (state, action) => {
//         state.email = action.payload.email;
//         state.password = action.payload.password;
//         state.firstName = action.payload.firstName;
//         state.lastName = action.payload.lastName;
//     },
//     updateUser: (state, action) => {
//       state.firstName = action.payload.firstName;
//       state.lastName = action.payload.lastName;
//     },
//     cancelUpdateUser: (state, action) => {
//       return state;
//     }
//   }
// })

// // Action creators are generated for each case reducer function
// export const { createUser, loginUser, getUserProfile, updateUser } = userSlice.actions;

// export default userSlice.reducer;