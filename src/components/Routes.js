import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';

const index = () => {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/signin" element={ <SignIn /> } />
    </Routes>
  );
};

export default index;