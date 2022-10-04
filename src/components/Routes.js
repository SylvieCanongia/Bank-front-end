import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home';
import Login from '../pages/Login';
import User from '../pages/User';

const index = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/login" element={ <Login /> } />
      <Route path="/user" element={ <User /> } />
    </Routes>
  );
};

export default index;