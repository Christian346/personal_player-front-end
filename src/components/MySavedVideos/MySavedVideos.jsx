import './MySavedVideos.css';
import videoList from '../../utils/constant'; 
import VideoItem from '../VideoItem/VideoItem';

function MySavedVideos({apiVideos ,buttonText}){

    return(
        <div className='MySavedVideos__container'>
          <p>my saved video library put the thumbnails here!</p>
          
          
          {
            apiVideos.map((video, index)=>{
              return <VideoItem videoData={video} key={index}  buttonText={buttonText}/>;
            })
            /*the videos you add from your search will be show here you will be able to delete them if you want */
          }
        </div>
    )
}
export default MySavedVideos;