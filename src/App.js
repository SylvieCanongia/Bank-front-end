import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import Home from './pages/Home';
import Login from './features/auth/Login';
// import Profile from './features/user/Profile/Profile';
import User from './pages/User';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route element={<ProtectedRoute />} >
          <Route path="/profile" element={ <User /> } />
          {/* <Route path="/profile" element={ <Profile /> } /> */}
        </Route>
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
