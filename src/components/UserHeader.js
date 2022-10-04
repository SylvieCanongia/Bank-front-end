const UserHeader = () => {
  return (
    <div className="userHeader">
        <h1>Welcome back</h1>
        <form>
          <div className="formFirstLastNames">
            <div className="user-input-wrapper">
              <input type="text" name="firstName" placeholder="Tony" required/>
            </div>
            <div className="user-input-wrapper">
              <input type="text" name="lastName" placeholder="Jarvis" required/>
            </div>
          </div>
          <button type="submit" className="update-button">Save</button>
          <button type="submit" className="update-button">Cancel</button>
        </form>
      </div>
  );
};

export default UserHeader;