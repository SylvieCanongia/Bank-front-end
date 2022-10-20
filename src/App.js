import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout'

import Home from './pages/Home';
import Login from './features/auth/Login';
import RequireAuth from './features/auth/RequireAuth';
import Profile from './pages/Profile/Profile';
import User from './pages/User';
// import Routes from './Routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Layout /> }>
          {/* public routes */}
          <Route index element={ <Home /> } />
          <Route path="login" element={ <Login /> } />

          {/* protected routes */}
          <Route element={<RequireAuth />} >
            <Route path="user" element={ <User /> } />
            <Route path="profile" element={ <Profile /> } />
          </Route>
        </Route>
      </Routes>
      {/* <Routes /> */}
      <Footer />
    </div>
  );
}

export default App;
