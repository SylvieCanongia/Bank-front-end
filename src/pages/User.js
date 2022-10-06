import Header from "../components/Header";
import Account from "../components/Account";

const User = () => {
  return (
    <main className="main bg-dark">
      <Header />
      <h2 className="sr-only">Accounts</h2>
      <Account />
      <Account />
      <Account />
    </main>
  );
};

export default User;