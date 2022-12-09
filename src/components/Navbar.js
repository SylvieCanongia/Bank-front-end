import { NavLink } from "react-router-dom";
import ArgentBankLogo from './../assets/img/argentBankLogo.png';

const Navbar = () => {
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
        <div>
          <NavLink className="main-nav-item" end="true" to="/login">
                <i className="fa fa-user-circle"></i>
                Sign In
          </NavLink>
        </div>
        <div>
          <NavLink end="true" to="/profile" className="main-nav-item">
            <i class="fa fa-user-circle"></i>
              Tony
          </NavLink>
          <NavLink end="true" to="/" className="main-nav-item">
            <i class="fa fa-sign-out"></i>
              Sign Out
          </NavLink>
        </div>
      </nav>
  );
};

export default Navbar;