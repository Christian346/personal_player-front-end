import './VideoSearchResults.css';
import VideoItem from '../VideoItem/VideoItem';
import videoList from '../../utils/constant';

function VideoSearchResults(){
    
    
    return (
      <div className="VideoSearchResults__container">
        <p>search results of videos in a list </p>

        {/*list of videos you searched will be shown here in a carousel style that you can click
              you can select them and add them to your library*/
        /*third party react component for the carousel */}
        <div className="VideoSearchResults__list">
          {videoList.map((video, index) => {
            return <VideoItem key={index} url={video.url} />;
          })}
        </div>
      </div>
    );
}
export default VideoSearchResults;