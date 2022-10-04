import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile/Profile';
import User from '../pages/User';

const index = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/user" element={ <User /> } />
      <Route path="/profile" element={ <Profile /> } />
    </Routes>
  );
};

export default index;