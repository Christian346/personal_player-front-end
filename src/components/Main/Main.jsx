import './Main.css'
import VideoSearchResults from '../VideoSearchResults/VideoSearchResults';
import MySavedVideos from '../MySavedVideos/MySavedVideos';

function Main(){
    return(
        <main>
          <VideoSearchResults />
          <MySavedVideos />
        </main>
    )
}
export default Main;