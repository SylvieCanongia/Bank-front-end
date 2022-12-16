import ProfileHeader from "../../../components/ProfileHeader";
import Header from "../../../components/Header";
import { useSelector } from "react-redux";
import Account from "../../../components/Account";
import './profile.css';

const Profile = () => {
  const { editHeader } = useSelector((state) => state.user);

    return (
      <>
      { editHeader ? (
        
        <main className="profile main bg-dark">
          <ProfileHeader />
        <h2 className="sr-only">Accounts</h2>
          <Account />
          <Account />
          <Account />
      </main>
      ) : (
        <main className="main bg-dark">
          <Header />
        <h2 className="sr-only">Accounts</h2>
          <Account />
          <Account />
          <Account />
        </main>
      )}
      </>
      
    );
};

export default Profile;