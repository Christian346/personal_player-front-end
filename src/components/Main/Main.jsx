import './Main.css'
import VideoSearchResults from '../VideoSearchResults/VideoSearchResults';
import MySavedVideos from '../MySavedVideos/MySavedVideos';

function Main({apiVideos}){
    return (
      <main>
        <VideoSearchResults buttonText={"add"} apiVideos={apiVideos} />
        <MySavedVideos buttonText={"delete"} apiVideos={apiVideos} />
      </main>
    );
}
export default Main;