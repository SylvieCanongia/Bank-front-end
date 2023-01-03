import ProfileHeader from "../../components/ProfileHeader";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import Account from "../../components/Account";
import './profile.css';

const Profile = () => {
  const { editHeader } = useSelector((state) => state.user);

    return (
      <>
        <main className={editHeader ? "profile main bg-dark" : "main bg-dark"}>
        { editHeader ? <ProfileHeader /> :  <Header /> }
        <h2 className="sr-only">Accounts</h2>
          <Account />
          <Account />
          <Account />
      </main>
      </>
    );
};

export default Profile;