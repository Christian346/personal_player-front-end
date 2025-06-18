import "./VideoItem.css";

function VideoItem({url}){
    return (
      <div>
        <iframe
          width="300"
          height="300"
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    );
}
export default VideoItem