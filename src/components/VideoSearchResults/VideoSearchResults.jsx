import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "./VideoSearchResults.css";
import VideoItem from "../VideoItem/VideoItem";
import videoList from "../../utils/constant";

function VideoSearchResults({apiVideos ,buttonText}) {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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

  return (
    <div className="VideoSearchResults__container">
      <p>search results of videos in a list </p>

      {/*list of videos you searched will be shown here in a carousel style that you can click
              you can select them and add them to your library*/
      /*third party react component for the carousel */}

      <div className="VideoSearchResults__list">
        <Slider {...settings}>
          {apiVideos.map((video, index) => {
            return <VideoItem key={index} videoData={video} buttonText={buttonText} />;
          })}
        </Slider>
      </div>
    </div>
  );
}
export default VideoSearchResults;
