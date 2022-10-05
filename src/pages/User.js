import UserHeader from "../components/UserHeader";
import Account from "../components/Account";

const User = () => {
  return (
    <main className="main bg-dark">
      <UserHeader />
      <h2 className="sr-only">Accounts</h2>
      <Account />
      <Account />
      <Account />
    </main>
  );
};

export default User;