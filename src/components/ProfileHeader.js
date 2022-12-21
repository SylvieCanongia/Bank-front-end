import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from "../features/user/userActions";
import { updateFirstName, updateLastName } from "../features/user/userSlice";
import { closeEditHeader } from "../features/user/userSlice";

const UserHeader = () => {
  const { userInfo, firstName, lastName, editHeader } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  // const handleHeaderEdit= (e) => {
  //   setEditHeader('true');
  // }

  const handleUpdateUser= (e) => {
    e.preventDefault();
    // dispatch(updateFirstName());
    // dispatch(updateLastName());
    dispatch(updateUserProfile());
    dispatch(closeEditHeader());
  }
  const handleCancelEditHeader= (e) => {
    dispatch(closeEditHeader());
  }

  // const cancelUpdateUser= (e) => {
  //   setEditHeader('false');
  // }

  // const headerStatic = (
  //   <div className="header">
  //       { userInfo ? (<h1>Welcome back<br />{ firstName } { lastName } !</h1>) : "You're not logged in" }
  //       <Link to="/profile">
  //       { userInfo &&
  //         <button
  //           className="edit-button"
  //           onClick={handleHeaderEdit}
  //           >Edit Name</button>
  //       }
  //       </Link>
  //     </div>
  // );

  const headerEdit = (
    <div className="userHeader">
      <h1>Welcome back</h1>
      <form>
        <div className="formFirstLastNames">
          <div className="user-input-wrapper">
            <input type="text" name="firstName" defaultValue={firstName} required onChange={(e) => { dispatch(updateFirstName(e.target.value))}}/>
          </div>
          <div className="user-input-wrapper">
            <input type="text" name="lastName" defaultValue={lastName} required onChange={(e) => dispatch(updateLastName(e.target.value))}/>
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
          onClick={handleCancelEditHeader}
          type="button"
          className="update-button">
          Cancel
        </button>
      </form>
    </div>
  );

  // const content = editHeader ? headerStatic : headerEdit;
  
  return headerEdit;
};

export default UserHeader;
