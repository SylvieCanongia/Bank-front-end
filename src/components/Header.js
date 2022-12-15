// import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserProfile } from '../features/user/userActions';

const Header = () => {

  const { userInfo, firstName, lastName } = useSelector((state) => state.user);

  return (
      <div className="header">
        { userInfo ? (<h1>Welcome back<br />{ firstName } { lastName } !</h1>) : "You're not logged in" }
        <Link to="/profile">
        { userInfo &&
          <button className="edit-button">Edit Name</button>
        }
        </Link>
      </div>
  );
};

export default Header;
