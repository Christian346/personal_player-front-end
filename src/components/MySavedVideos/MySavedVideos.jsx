import './MySavedVideos.css';
import videoList from '../../utils/constant'; 
import VideoItem from '../VideoItem/VideoItem';

function MySavedVideos(){

    return(
        <div className='MySavedVideos__container'>
          <p>my saved video library</p>
          
          
          {
            videoList.map((video, index)=>{
              return <VideoItem url={video.url} key={index} />;
            })
            /*the videos you add from your search will be show here you will be able to delete them if you want */
          }
        </div>
    )
}
export default MySavedVideos;