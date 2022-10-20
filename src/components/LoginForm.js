import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setCredentials } from './../features/auth/authSlice';
import { useLoginMutation } from './../features/auth/authApiSlice';

// import { Link } from "react-router-dom";

const LoginForm = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  // destructures the isLoading
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch;

  useEffect(() => {
    // current is the ref to the DOM text field
    // focuses on the userName input
    userRef.current.focus();
  }, []);

  // Resets the password when user or password fields values change
  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //  Submits to the API
      //  gets the user data. login() function is from the login mutation
      const userData = await login({ email, password }).unwrap();
      console.log(userData);
      // saves the username and gets an access token
      dispatch(setCredentials({ ...userData, email }));
      setEmail('');
      setPassword('');
      navigate('/user');
    }
    catch (err) {
      if (!err?.originalStatus) {
        // isLoading: true until timeout occurs
        setErrMsg('No Server Response');
      } else if (err.originalStatus === 400) {
        setErrMsg('Missong Username or Password');
      } else if (err.originalStatus === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  }

  const handleUserInput= (e) => setEmail(e.target.value);

  const handlePwdInput = (e) => setPassword(e.target.value);

  const content = isLoading ? <h1>Loading...</h1> : (
    <section className="sign-in-content">
      <p ref={errRef} className= { errMsg ? "errMsg" : "offscreen" } aria-live="assertive">{errMsg}</p>

      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="email"
            id="username"
            ref={userRef}
            value={email}
            onChange={handleUserInput}
            autoComplete="off"
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePwdInput}
            required />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
        {/* <Link className="sign-in-button" to='/user'>Sign In</Link> */}
        {/* <a href="./user.html" className="sign-in-button">Sign In</a> */}
        {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
        <button className="sign-in-button">Sign In</button>
        {/* <!--  --> */}
      </form>
    </section>
  )

  return content;
};

export default LoginForm;
