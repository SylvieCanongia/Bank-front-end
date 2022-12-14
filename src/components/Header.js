// import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUserProfile } from '../features/user/userActions';

const Header = () => {

  const { userInfo, token, firstName, lastName } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  // console.log(userInfo);
  // console.log(token);
  // console.log(firstName);
  // console.log(lastName);

  useEffect(() => {
      console.log(token)
      if(token) {
        console.log(`dispatch(getUserProfile()) est 'rejected' :`, dispatch(getUserProfile()))
        dispatch(getUserProfile())
      }
  }, [token, dispatch])

  // console.log(userInfo)

  const userFirstName = useSelector((state) => state.user.firstName);
  // console.log(userFirstName);
  const userLastName = useSelector((state) => state.user.lastName);
  // console.log(userLastName);

  return (
      <div className="header">
        { userInfo ? (<h1>Welcome back<br />{ userFirstName }{ userLastName } !</h1>) : "You're not logged in" }
        <Link to="/profile">
        { userInfo &&
          <button className="edit-button">Edit Name</button>
        }
        </Link>
      </div>
  );
};

export default Header;
