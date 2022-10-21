import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useGetUserProfileQuery } from "../features/users/usersApiSlice";

// import { getUserProfile, updateUser } from "../../designs/css/userSlice";
// import { updateUserProfile } from "../actions/actionCreators";
// import { cancelUpdateUserProfile } from "../actions/actionCreators";
// import { updateUserFirstAndLastName } from "../actions/actionCreators";
// import { cancelUserFirstAndLastName } from "../actions/actionCreators";

const UserHeader = () => {
  // const userFirstName = useSelector((state) => state.user.firstName);
  // console.log(userFirstName);
  // const userLastName = useSelector((state) => state.user.lastName);
  // console.log(userLastName);

  const {
    data: user,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUserProfileQuery();

  const [editHeader, setEditHeader] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    
  })

  const handleHeaderEdit= (e) => {
    setEditHeader('true');
  }

  const handleUpdateUser= (e) => {
    e.preventDefault();
    setEditHeader('false');
    // dispatch(TODO)
  }

  const headerStatic = (
    <div className="header">
      <h1>Welcome back<br />{ user.firstName } { user.lastName } !</h1>
        <button onChange={handleHeaderEdit} className="edit-button">Edit Name</button>
    </div>
  );

  const headerEdit = (
    <div className="userHeader">
      <h1>Welcome back</h1>
      <form>
        <div className="formFirstLastNames">
          <div className="user-input-wrapper">
            <input type="text" name="firstName" placeholder={user.firstName} required />
          </div>
          <div className="user-input-wrapper">
            <input type="text" name="lastName" placeholder={user.lastName} required />
          </div>
        </div>
        <button
          onClick={handleUpdateUser}
          type="submit"
          className="update-button"
        >
          Save
        </button>
        <button
          // onClick={() => {
          //   dispatch(cancelUpdateUserProfile());
          // }}
          type="submit"
          className="update-button">
          Cancel
        </button>
      </form>
    </div>
  );

  const content = editHeader ? headerStatic : headerEdit;

  return content;
};

export default UserHeader;
