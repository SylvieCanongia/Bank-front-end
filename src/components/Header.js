import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editHeader } from "../features/user/userSlice";

const Header = () => {

  const { userInfo, firstName, lastName } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleEditHeader = () => {
    dispatch(editHeader());
  }

  return (
      <div className="header">
        { userInfo ? (<h1>Welcome back<br />{ firstName } { lastName } !</h1>) : "You're not logged in" }
        <Link to="/profile">
        { userInfo &&
          <button
            className="edit-button"
            type="button"
            onClick={handleEditHeader}
          >
            Edit Name
          </button>
            
        }
        </Link>
      </div>
  );
};

export default Header;
