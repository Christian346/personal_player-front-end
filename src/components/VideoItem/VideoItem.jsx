import "./VideoItem.css";
import { useState } from "react";

function VideoItem({ videoData, buttonText }) {
  const [showIframe, setShowIframe] = useState(false);

  return (
    <div>
      {!showIframe ? (
        <img
          src={videoData.snippet.thumbnails.default.url}
          alt=""
          width="200px"
          onClick={() => {
            setShowIframe(true);
          }}
        />
      ) : (
        <div className="VideoItem__iframe-container">
        <iframe
          className="VideoItem__single-video"
          src={`https://www.youtube.com/embed/${videoData.id}?`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <button type="button"
        className="VideoItem__button"
        >{buttonText}</button>
        </div>
      )}
    </div>
  );
}
export default VideoItem;
