import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./VideoSearchResults.css";
import VideoItem from "../VideoItem/VideoItem";
import videoList from "../../utils/constant";
import Preloader from "../preloadspinner/Preloader";

function VideoSearchResults({
  apiVideos,
  buttonText,
  preLoaderState,
  handleAddVideoToLibrary,
  savedVideos,
}) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  console.log(savedVideos);

  return (
    <div className="VideoSearchResults__container">
      <p>search results of videos in a list </p>

      {/*  */}
      <div className="VideoSearchResults__list">
        <Slider {...settings} className="slick-carousel">
          {preLoaderState ? (
            <Preloader />
          ) : (
            apiVideos?.map((video, index) => {
              //check if videos id is in the array of savedVideos
              // console.log(video, savedVideos)
              let isSaved = savedVideos.find((oneItemFromSavedVideos) => {
                return video.id.videoId === oneItemFromSavedVideos.id.videoId;
              });

              return (
                <VideoItem
                  type={"search"}
                  isSaved={isSaved}
                  key={index}
                  videoData={video}
                  buttonText={buttonText}
                  handleAddVideoToLibrary={handleAddVideoToLibrary}
                />
              );
            })
          )}
        </Slider>
      </div>
    </div>
  );
}
export default VideoSearchResults;
