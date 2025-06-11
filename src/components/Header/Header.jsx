import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__profile-container">
        <img src="" alt="" className="header__image" />
        <p className="header__username">Some-username</p>
      </div>

      <div className="header__app-name">
        <p>
          My music
          <br /><span>Video</span> 
          <br />Library
        </p>
      </div>
      <div className="header__search-bar">
        here goes a search bar
      </div>
    </header>
  );
}

export default Header;
