import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ProfileEditModal from "../ProfileEditModal/ProfileEditModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LogInModal from "../LogInModal/LogInModal";
import CurrentUserContext from "../../utils/CurrentUserContext";
import stubdata from "../../utils/stubdata";

function fetchVideos() {
  const useStubData = true;
  if (useStubData) {
    return new Promise((resolve, reject) => {
      resolve(stubdata);
    });
  } else {
    return fetch(
      "https://content-youtube.googleapis.com/youtube/v3/search?0=i&1=d&2=%2C&3=s&4=n&5=i&6=p&7=p&8=e&9=t&alt=json&key=AIzaSyAuyuThRw5e1oEc5YKJeEMkHA61D1iBfxY",
      {
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          q: "music video",
          maxResults: 10,
        }),
      }
    );
  }
}

function App() {
  const [activeModal, setActiveModal] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userData, setUserData] = useState({ username: "", email: "" });
  const [videos, setVideos] = useState([]); // you can only show things when they are stored in state variable in react or its hard coded

  const closeActiveModal = () => {
    setActiveModal("");
  };
  const handleEditProfileModalBtnClick = () => {
    setActiveModal("ProfileEditModal");
  };

  const handleRegisterBtnClick = () => {
    setActiveModal("RegisterModal");
  };

  const handleLogInBtnClick = () => {
    setActiveModal("LogInModal");
  };

  useEffect(() => {
    fetchVideos().then((res) => {
      console.log(res);
      setVideos(res.videos);
    });
  }, []);

  // useEffect(() => {
  //   function start() {
  //     // 2. Initialize the JavaScript client library.
  //     gapi.client
  //       .init({
  //         apiKey: "AIzaSyAuyuThRw5e1oEc5YKJeEMkHA61D1iBfxY",
  //         // Your API key will be automatically added to the Discovery Document URLs.
  //         //discoveryDocs: ["https://people.googleapis.com/$discovery/rest"],
  //       })
  //       .then(function () {
  //         return gapi.client.load("youtube", "v3").then((res) => {
  //           console.log("Loaded youtube API");
  //           console.log(res);
  //           return gapi.client.youtube.search
  //             .list("id,snippet", {
  //               //snippet is the metadata about the videos
  //               q: "music video",
  //               maxResults: 10,
  //             })
  //             .then(
  //               (res) => {
  //                 console.log(res);
  //                 setVideos(res);
  //               } /*we set the resulting values to the setVideo state*/
  //             );
  //         });
  //         // 3. Initialize and make the API request.
  //         // https://www.googleapis.com/youtube/v3/search?part=snippet&q=music video
  //         // return gapi.client.people.people.get({
  //         // resourceName: "people/me",
  //         // "requestMask.includeField": "person.names",
  //         //});
  //         //YouTube.Search.list("id,snippet", { q: "dogs", maxResults: 25 });
  //       })
  //       .then(
  //         function (response) {
  //           console.log(response);
  //         },
  //         function (reason) {
  //           console.log("Error: ", reason /*.result.error.message*/);
  //         }
  //       );
  //   }
  //   // 1. Load the JavaScript client library.
  //   gapi.load("client", start);
  // }, []);

  return (
    <div className="page">
      <CurrentUserContext.Provider
        value={{ currentUser: userData, isLoggedIn }}
      >
        <div className="page__content">
          <Header
            handleEditProfileModalBtnClick={handleEditProfileModalBtnClick}
            handleRegisterBtnClick={handleRegisterBtnClick}
            handleLogInBtnClick={handleLogInBtnClick}
          />
          {/*Routes with route and protectedRouter its switch between pages */}
          <Main apiVideos = {videos}/>
          <Footer />
        </div>

        {/*Modals sections */}

        {activeModal === "ProfileEditModal" && (
          <ProfileEditModal
            handleCloseActiveModal={closeActiveModal}
            isOpen={activeModal === "ProfileEditModal"}
            // onEdit={handleEdit}
          />
        )}

        {activeModal === "RegisterModal" && (
          <RegisterModal
            handleCloseActiveModal={closeActiveModal}
            isOpen={activeModal === "RegisterModal"}
            // onEdit={handleEdit}
          />
        )}

        {activeModal === "LogInModal" && (
          <LogInModal
            handleCloseActiveModal={closeActiveModal}
            isOpen={activeModal === "LogInModal"}
          />
        )}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
