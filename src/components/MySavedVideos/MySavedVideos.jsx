import "./MySavedVideos.css";
import videoList from "../../utils/constant";
import VideoItem from "../VideoItem/VideoItem";

function MySavedVideos({
  apiVideos,
  buttonText,
  savedVideos,
  handleDeleteVideoFromLibrary,
  handleAddVideoToLibrary,
}) {
  console.log();
  return (
    <div className="MySavedVideos__container">
      <p className="MySavedVideos__paragraph">my saved video library put the thumbnails here!</p>
      {
        savedVideos.map((video, index) => {
          return (
            <VideoItem
              type={"saved"}
              isSaved={true}
              videoData={video}
              key={index}
              buttonText={buttonText}
              handleDeleteVideoFromLibrary={handleDeleteVideoFromLibrary}
            />
          );
        })

        //the videos you add from your search will be show here you will be able to delete them if you want
      }
    </div>
  );
}
export default MySavedVideos;
