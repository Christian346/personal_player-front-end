import "./Main.css";
import VideoSearchResults from "../VideoSearchResults/VideoSearchResults";
import MySavedVideos from "../MySavedVideos/MySavedVideos";

function Main({
  apiVideos,
  preLoaderState,
  savedVideos,
  handleAddVideoToLibrary,
  handleDeleteVideoFromLibrary,
}) {
 
  return (
    <main className="Main">
      <VideoSearchResults
     
        buttonText={"add to library"}
        apiVideos={apiVideos}
        preLoaderState={preLoaderState}
        handleAddVideoToLibrary={handleAddVideoToLibrary}
        savedVideos={savedVideos}
      />
      <MySavedVideos
     
        buttonText={"delete"}
        apiVideos={apiVideos}
        savedVideos={savedVideos}
        handleDeleteVideoFromLibrary={handleDeleteVideoFromLibrary}
      />
    </main>
  );
}
export default Main;
