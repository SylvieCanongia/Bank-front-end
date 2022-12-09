// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  // const userFirstName = useSelector((state) => state.user.firstName);
  // console.log(userFirstName);
  // const userLastName = useSelector((state) => state.user.lastName);
  // console.log(userLastName);

  return (
      <div className="header">
        {/* <h1>Welcome back<br />{ userFirstName } { userLastName } !</h1> */}
        <h1>Welcome back<br />Tony Stark !</h1>
        <Link to="/profile">
          <button className="edit-button">Edit Name</button>
        </Link>
      </div>
  );
};

export default Header;
