import ProfileHeader from "../../../components/ProfileHeader";
import Account from "../../../components/Account";
import './profile.css';

import { useGetUserProfileQuery } from "./../usersApiSlice";
// import { createSlice } from "@reduxjs/toolkit";

// const Profile = () => {

  const {
    data: user,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetUserProfileQuery();

  let content;

  if (isLoading) {
      content = <p>"Loading..."</p>;
  } else if (isSuccess) {
    content = (
      <main className="profile main bg-dark">
        <ProfileHeader />
        <h2 className="sr-only">Accounts</h2>
        <Account />
        <Account />
        <Account />
      </main>
    );
  }

  return content;
};

export default Profile;