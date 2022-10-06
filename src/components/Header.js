import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateUserProfile } from "../actions/actionCreators";
import { cancelUpdateUserProfile } from "../actions/actionCreators";
// import { updateUserFirstAndLastName } from "../actions/actionCreators";
// import { cancelUserFirstAndLastName } from "../actions/actionCreators";

const Header = () => {
  const userFirstName = useSelector((state) => state.firstName);
  console.log(userFirstName);
  const userLastName = useSelector((state) => state.lastName);
  console.log(userLastName);

  const dispatch = useDispatch();

  return (
      <div class="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button class="edit-button">Edit Name</button>
      </div>
  );
};

export default Header;
