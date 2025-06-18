import "./Header.css";

function Header({ handleEditProfileModalBtnClick }) {  
  return (
    <header className="header">
      <div className="header__profile-container">
        <img src="" alt="" className="header__image" />
        <p className="header__username">Some-username</p>
        <button
          className="header__btn"
          onClick={handleEditProfileModalBtnClick}
        >
          change user info
        </button>
      </div>

      <div className="header__app-name">
        <p>
          My music
          <br />
          <span>Video</span>
          <br />
          Library
        </p>
      </div>
      <div>
        <form onSubmit={undefined}>
          <input type="search" />
          <button type="submit">submit</button>
        </form>
        {/* so we want to make it a controlled input put it inside a form
        in the handler use eprevent default and send the fetch request to the api to get the result you want
         */}
      </div>
    </header>
  );
}

export default Header;
