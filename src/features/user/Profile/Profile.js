import ProfileHeader from "../../../components/ProfileHeader";
import Account from "../../../components/Account";
import './profile.css';

const Profile = () => {
    return (
      <main className="profile main bg-dark">
        <ProfileHeader />
        <h2 className="sr-only">Accounts</h2>
        <Account />
        <Account />
        <Account />
      </main>
    );
};

export default Profile;