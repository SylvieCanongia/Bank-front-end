import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ArgentBankLogo from './../assets/img/argentBankLogo.png';
import { useEffect } from "react";
import { getUserProfile } from "../features/user/userActions";

const Navbar = () => {
const { userInfo, userToken } = useSelector( (state) => state.user);
const dispatch = useDispatch();

// automatically authenticate user if token is found
useEffect(() => {
  if (userToken) {
    dispatch(getUserProfile())
  }
}, [userToken, dispatch])

  return (
     <nav className="main-nav">
        <NavLink end="true" to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={ ArgentBankLogo }
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        { userInfo ? 
          (
            <div>
            <NavLink end="true" to="/profile" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
                Tony
            </NavLink>
            <NavLink end="true" to="/" className="main-nav-item">
              <i className="fa fa-sign-out"></i>
                Sign Out
            </NavLink>
          </div>
          ) : (
          <div>
            <NavLink className="main-nav-item" end="true" to="/login">
                  <i className="fa fa-user-circle"></i>
                  Sign In
            </NavLink>
          </div>
          )
        }
      </nav>
  );
};

export default Navbar;