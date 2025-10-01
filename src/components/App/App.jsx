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
import { getUserInfo } from "../../utils/api";
import { logIn, registerUser } from "../../utils/authentication";
import { addVideo, deleteVideo, setUserInfo } from "../../utils/api";
import { getToken, removeToken, storeToken } from "../../utils/token";
import * as authentication from "../../utils/authentication";

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

  // function handleLogIn(email, password) {
  //   logIn(email, password).then((faketoken) => {
  //     //will recieve a token and with that toke we can use that fetch the user object
  //     return getUserInfo(faketoken).then((user) => {
  //       setUserData(user);
  //       setIsLoggedIn(true);
  //       localStorage.setItem("token", faketoken);
  //       closeActiveModal();
  //     });
  //   });
  // }

  const handleLogIn = ({ email, password }) => {
    authentication
      .logIn(email, password)
      .then((data) => {
        console.log(data);

        // Verify that a jwt is included before logging the user in.
        if (data.token) {
          storeToken(data.token);
          setUserData(data.user); // save user's data to state
          setIsLoggedIn(true); // log the user in
          // navigate("/profile"); // send them to where they need to be?
          //
          // console.log(data);
          closeActiveModal();
        }
      })
      .catch(console.error);
  };

  const handleLogOut = () => {
    removeToken();
    setIsLoggedIn(false);
    console.log("testifitworkds");
  };
  // function logOut() {
  //   setIsLoggedIn(false);
  //   setUserData({ username: "", email: "" });
  //   localStorage.removeItem("token", faketoken);
  // }

  function handleRegisterNewUser({ email, password, name, avatar }) {
    authentication
      .registerUser(email, password, name, avatar)
      .then(() => {
        handleRegisterBtnClick();
      })
      .catch(console.error);
  }

  const handleEdit = (data) => {
    setUserInfo(data, getToken())
      .then((res) => {
        setUserData(res);
      })
      .catch((error) => {
        console.error(error);
      });
    closeActiveModal();
  };
  // ---------------------------------------------------------------------
  function handleAddVideoToLibrary(video) {
    //console.log(video);
    const videoObject = {
      title: /*video.snippet*/video.title, 
      thumbnail: video/*.snippet.thumbnails.default.url*/.thumbnail,
      videoIdForUrl: video.youtubeVideoId/*id.videoId*/
    };
    //console.log(videoObject);
    //console.log("trying to add video");
    addVideo(videoObject, getToken())
      //console.log(savedVideos)
      .then((response) => {
        console.log(response.data)
        if (response.data) {
          setSavedVideos((savedVideos) => [
            response.data,
            ...savedVideos /*video*/,
          ]);
        }
        //console.log(response); //setSavedVideos((savedVideos) => [...savedVideos, video]);
      })
 //  .then((addedVideoResponse) => {//   console.log(addedVideoResponse)//    setSavedVideos([//     ...savedVideos,//     addedVideoResponse.data//    //    // (savedVideos) => [...savedVideos, video]//   );/*})*/ `` 
   .catch((error) => {
        console.log(error);
      });
    // setSavedVideos([ //   videoResponse.data, ...videos// ])
    /*  setSavedVideos((savedVideos) => [...savedVideos, videos])// setSavedVideos([//   videoResponse.data, ...videos// ]) */
    //we would call the fake api function//then i would have to update the state variable by calling its setter//i would pass that updated variable to the library component and show it as prop// the delete part would be similar !
  }
  
  

  function handleDeleteVideoFromLibrary(idtoDelete) {
    console.log(idtoDelete);
    deleteVideo(idtoDelete, getToken())
    .then(
      () => {
            const fileteredVideos = savedVideos.filter(
        (savedVideo)=> {return savedVideo._id == idtoDelete}
      );
      setSavedVideos(fileteredVideos);
      // console.log(`Delete ${idtoDelete}`);// setSavedVideos((savedVideos) => { //   return savedVideos.filter((savedVideo) => { //     console.log(savedVideo.id.videoId, idtoDelete);//     return savedVideo.id.videoId !== idtoDelete;
        }).catch((error) => {
        console.log(error);
      });   
  }
  //-------------------
  function getVideosFromBackend(){
    getVideos().then((res)=>{
      console.log(res.items)
      if (res.items) {
        const standardizedVideos = res.items.map((item) =>
          standarizeVideosResponse(item)
        );
        setSavedVideos(standardizedVideos /*res.items*/ /*items.id */ /*.videos*/);
      }

     // setSavedVideos(res.items);
    }).catch(err => console.log(err))
  }

  //----------------------------
  function fetchVideos(searchTerm) {
    console.log(searchTerm);
    setLoading(true);

    if (searchTerm) {
      getVideos(searchTerm).then((res) => {
       // console.log(res.items)
        if(res.items){
          const standardizedVideos = res.items.map((item) =>
            standarizeVideosResponse(item)
          );
            setVideos(standardizedVideos/*res.items*/ /*items.id */ /*.videos*/);
        }
     
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

  function standarizeVideosResponse(videoObject){
    //console.log(videoObject)
    const formattedVideo = {}
    const { snippet } = videoObject
    formattedVideo.title = snippet?.title;
    formattedVideo.thumbnail = snippet.thumbnails.default.url;
    formattedVideo.youtubeVideoId = videoObject.id.videoId;
    /// get all needed properties

    return formattedVideo

  }

  useEffect(()=>{
     getVideosFromBackend();
  },[isLoggedIn])

  useEffect(() => {
    function loadInitialVideos() {
      const useStubInitialVideos = true; //process.env.NODE_ENV !== "production";

      setLoading(true);
      if (useStubInitialVideos) {
        // if we are using the fake data and there is not search term
        return new Promise((resolve, reject) => {
          resolve(stubdata);
        }).then((res) => {
          //console.log(">>INITIAL DATA", res.items);

          // iterate through res.items, format each video object
          const standardizedVideos = res.items.map(item => standarizeVideosResponse(item))

          setVideos(/*res.items*/ standardizedVideos);
          setLoading(false);
        });
      } else {
        return getVideos("music video").then((res) => {
          console.log(res);
          setVideos(standarizeVideosResponse/*res.items*/); // you could map each item into a different representa
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
            // console.log(response);
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
            logOut={handleLogOut}
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
            onEdit={handleEdit}
          />
        )}

        {activeModal === "RegisterModal" && (
          <RegisterModal
            handleCloseActiveModal={closeActiveModal}
            isOpen={activeModal === "RegisterModal"}
            onRegister={handleRegisterNewUser}
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
