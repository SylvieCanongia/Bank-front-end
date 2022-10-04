import UserHeader from "../../components/UserHeader";
import Account from "../../components/Account";
import './profile.css';

import React from 'react';

const Profile = () => {
  return (
    <main class="profile main bg-dark">
      <UserHeader />
      <h2 class="sr-only">Accounts</h2>
      <Account />
      <Account />
      <Account />
    </main>
  );
};

export default Profile;