import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { updateUserProfile } from "../actions/actionCreators";
// import { cancelUpdateUserProfile } from "../actions/actionCreators";
// import { updateUserFirstAndLastName } from "../actions/actionCreators";
// import { cancelUserFirstAndLastName } from "../actions/actionCreators";

const Header = () => {
  const userFirstName = useSelector((state) => state.user.firstName);
  console.log(userFirstName);
  const userLastName = useSelector((state) => state.user.lastName);
  console.log(userLastName);

  // const user = useSelector((state) => state)

  // const dispatch = useDispatch();

  return (
      <div className="header">
        <h1>Welcome back<br />{ userFirstName } { userLastName } !</h1>
        <Link to="/profile">
          <button className="edit-button">Edit Name</button>
        </Link>
      </div>
  );
};

export default Header;
