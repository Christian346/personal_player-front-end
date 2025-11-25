import { useContext, useState } from "react";
import "./Header.css";
import CurrentUserContext from "../../utils/CurrentUserContext";
import videoList from "../../utils/constant";
import userImage from "../../assets/user.jpg";

function Header({
  handleEditProfileModalBtnClick,
  handleRegisterBtnClick,
  handleLogInBtnClick,
  handleSearchVideos,
  logOut,
}) {
  const { currentUser = {}, isLoggedIn } = useContext(CurrentUserContext);

  const [searchTerm, setSearchTerm] = useState("");
  /*you ll need sample data in an array or api data object */

  //const filteredItems = videoList(item =>
  //  item.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  //)

  function handleSearchChange(e) {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    handleSearchVideos(searchTerm);
  }

  return (
    <header className="header">
      {isLoggedIn ? (
        <div className="header__profile-container">
          <div className="header__user-info">
            <img
              src={userImage /*currentUser.avatar*/}
              alt=""
              className="header__image"
            />
            <p className="header__username">{currentUser.name}</p>
            <div className="header__buttons-container">
              <button
                onClick={handleEditProfileModalBtnClick}
                className="header__button_logged-in"
              >
                change user info
              </button>

              <button className="header__button_logged-in" onClick={logOut}>
                Log out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={handleLogInBtnClick} className="header__button">
            Log In
          </button>
          <button onClick={handleRegisterBtnClick} className="header__button">
            Sign Up
          </button>
        </div>
      )}

      <div className="header__app-name">
        {/* <p>
          My music
          <br />
          <span>Video</span>
          <br />
          Library
        </p> */}
      </div>
      <div>
        <form onSubmit={handleSearchSubmit}>
          <div>
            <input
              type="text"
              onChange={handleSearchChange}
              value={searchTerm}
            />
            <button type="submit" className="header__button">
              submit
            </button>
          </div>
        </form>
        {/* so we want to make it a controlled input put it inside a form
        in the handler use eprevent default and send the fetch request to the api to get the result you want
         */}
      </div>
    </header>
  );
}

export default Header;
