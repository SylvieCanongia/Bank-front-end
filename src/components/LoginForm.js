import { Link } from "react-router-dom";
import User from './../pages/User';

const LoginForm = () => {
  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
        <Link className="sign-in-button" to='/user'>Sign In</Link>
        {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
        {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
        {/* <!-- <button className="sign-in-button">Sign In</button> --> */}
        {/* <!--  --> */}
      </form>
    </section>
  );
};

export default LoginForm;
