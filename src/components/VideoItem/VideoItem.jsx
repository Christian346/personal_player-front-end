import "./VideoItem.css";
import { useState } from "react";
import React, { useContext } from "react";
import CurrentUserContext from "../../utils/CurrentUserContext";

function VideoItem({
  type,
  videoData,
  buttonText,
  handleDeleteVideoFromLibrary,
  handleAddVideoToLibrary,
  isSaved,
}) {

  const [showIframe, setShowIframe] = useState(false);
   const { currentUser, isLoggedIn } = useContext(CurrentUserContext);
   //console.log(videoData)

  // if not sved and the type is "search" then we see the n9ormal add button
  // if saved and hte type is "search" then we disable the button
  // if saved and type is "saved" then the button should be the delte button
   
  return (
    <div>
      {!showIframe ? (
        <div className="videoItem__thumbnail-container">
          <p className="VideoItem__title">{videoData.title/*videoData.snippet.title*/}</p>
          <img
            src={/*videoData.snippet.thumbnails.default.url*/videoData.thumbnail} //videoData.thumbnail
            alt=""
            className="VideoItem__thumbnail"
            onClick={() => {
              setShowIframe(true);
            }}
          />
        </div>
      ) : (
        <div className="VideoItem__iframe-container">
          <iframe
            className="VideoItem__single-video"
            src={`https://www.youtube.com/embed/${/*videoData.id.videoId*/videoData.youtubeVideoId}?`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          {/* you can use the && operator to render a component*/}

          {

          }
          {isLoggedIn && !isSaved && type === "search" && (
            <button
              type="button"
              className="VideoItem__button"
              onClick={() => {
                handleAddVideoToLibrary(videoData);
              }}

            >
              Add to library
            </button>
          )}
          {isSaved && type === "search" && (
            <button
              type="button"
              className="VideoItem__button"
              onClick={() => {
                handleAddVideoToLibrary(videoData);
              }}
              disabled
            >
              disabled
            </button>
          )}
          {isSaved && type === "saved" && (
            <button
              type="button"
              className="VideoItem__button"
              onClick={() => {
                handleDeleteVideoFromLibrary(videoData.id.videoId);
              }}
            >
              delete
            </button>
          )}

          {/* {buttonText ==='add to library' ? (
            <button
              type="button"
              className="VideoItem__button"
              onClick={() => {
                handleAddVideoToLibrary(videoData);
              }}
            >
              {buttonText}
            </button>
          ) : (
            <button
              type="button"
              className="VideoItem__button"
              onClick={() => {
                handleDeleteVideoFromLibrary(videoData.id.videoId);
              }}
            >
              {buttonText}
            </button>
          )} */}
        </div>
      )}
    </div>
  );
}
export default VideoItem;
