import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from "../features/user/userActions";
import { updateFirstName, updateLastName } from "../features/user/userSlice";
import { closeEditHeader } from "../features/user/userSlice";

const UserHeader = () => {
  const { firstName, lastName } = useSelector((state) => state.user);
  

  const dispatch = useDispatch();

  const handleUpdateUser= (e) => {
    e.preventDefault();
    dispatch(updateUserProfile());
    dispatch(closeEditHeader());
  }
  const handleCancelEditHeader= (e) => {
    dispatch(closeEditHeader());
    // Refresh the component to reset the firstName and lastName at their initial value
    window.location.reload(false);
  }

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
  
  return headerEdit;
};

export default UserHeader;
