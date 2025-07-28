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
import { getVideos } from "../../utils/thirdpartyapi";
import { getUserInfo, logIn } from "../../utils/api";
import { addVideo, deleteVideo } from "../../utils/api";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ username: "", email: "" });
  const [videos, setVideos] = useState([]); // you can only show things when they are stored in state variable in react or its hard coded
  const [savedVideos, setSavedVideos] = useState([]);
  const [loading, setLoading] = useState(false);

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

  function handleLogIn(email, password) {
    logIn(email, password).then((faketoken) => {
      //will recieve a token and with that toke we can use that fetch the user object
      return getUserInfo(faketoken).then((user) => {
        setUserData(user);
        setIsLoggedIn(true);
        localStorage.setItem("token", faketoken);
        closeActiveModal();
      });
    });
  }

  function logOut() {
    setIsLoggedIn(false);
    setUserData({ username: "", email: "" });
    localStorage.removeItem("token", faketoken);
  }

  function handleAddVideoToLibrary(video) {
    //we would call the fake api function
    addVideo(video).then(() => {
      setSavedVideos((savedVideos) => [...savedVideos, video]);
    });

    //then i would have to update the state variable by calling its setter
    //i would pass that updated variable to the library component and show it as prop
    // the delete part would be similar !
  }
  console.log(savedVideos);

  function handleDeleteVideoFromLibrary(idtoDelete) {
    deleteVideo(idtoDelete).then(() => {
      console.log(`Delete ${idtoDelete}`);

      setSavedVideos((savedVideos) => {
        return savedVideos.filter((savedVideo) => {
          console.log(savedVideo.id.videoId, idtoDelete);
          return savedVideo.id.videoId !== idtoDelete;
        });
      });
    });
  }

  function fetchVideos(searchTerm) {
    console.log(searchTerm);
    setLoading(true);

    if (searchTerm) {
      getVideos(searchTerm).then((res) => {
        setVideos(res.items /*.videos*/);
        setLoading(false);
      });
    } else {
      getVideos("music video").then((res) => {
        setVideos(res.items /*.videos*/);
        setLoading(false);
      });
    }
    //v2
    // const useStubSearchData = true; //process.env.NODE_ENV !== "production";
    // if (useStubSearchData) {
    //   // if we are using the fake data and there is not search term
    //   return new Promise((resolve, reject) => {
    //     resolve(stubdata);
    //   });
    // } else {

    //}
  }

  useEffect(() => {
    function loadInitialVideos() {
      const useStubInitialVideos = true; //process.env.NODE_ENV !== "production";

      setLoading(true);
      if (useStubInitialVideos) {
        // if we are using the fake data and there is not search term
        return new Promise((resolve, reject) => {
          resolve(stubdata);
        }).then((res) => {
          setVideos(res.items);
          setLoading(false);
        });
      } else {
        return getVideos("music video").then((res) => {
          console.log(res);
          setVideos(res.items); // you could map each item into a different representa
          setLoading(false);
        });
      }
    }
    loadInitialVideos();
    // loadInitialVideos().then((data) => {
    //   setVideos(data.videos);
    // });
  }, []);

  useEffect(() => {
    function start() {
      // 2. Initialize the JavaScript client library.
      gapi.client
        .init({
          apiKey: "AIzaSyAuyuThRw5e1oEc5YKJeEMkHA61D1iBfxY",
          // Your API key will be automatically added to the Discovery Document URLs.
          //discoveryDocs: ["https://people.googleapis.com/$discovery/rest"],
        })
        .then(function () {
          return gapi.client.load("youtube", "v3").then((res) => {
            // console.log("Loaded youtube API");
            // console.log(res);
            // .then(
            //   (res) => {
            //     console.log(res);
            //     setVideos(res);
            //   } /*we set the resulting values to the setVideo state*/
            // );
          });
          // 3. Initialize and make the API request.
          // https://www.googleapis.com/youtube/v3/search?part=snippet&q=music video
          // return gapi.client.people.people.get({
          // resourceName: "people/me",
          // "requestMask.includeField": "person.names",
          //});
          //YouTube.Search.list("id,snippet", { q: "dogs", maxResults: 25 });
        })
        .then(
          function (response) {
            console.log(response);
          },
          function (reason) {
            console.log("Error: ", reason /*.result.error.message*/);
          }
        );
    }
    // 1. Load the JavaScript client library.
    gapi.load("client", start);
  }, []);

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
            handleSearchVideos={fetchVideos}
            logOut={logOut}
          />
          {/*Routes with route and protectedRouter its switch between pages */}

          <Main
            apiVideos={videos}
            preLoaderState={loading}
            savedVideos={savedVideos}
            handleAddVideoToLibrary={handleAddVideoToLibrary}
            handleDeleteVideoFromLibrary={handleDeleteVideoFromLibrary}
          />
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
            onLogin={handleLogIn}
          />
        )}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
