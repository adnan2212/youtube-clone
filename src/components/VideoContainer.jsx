import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { YOUTUBE_VIDEOS_API } from "../config";
import VideoCard from "./CardVideo";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items[0]);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <div key={video.id}>
          <Link
            to={`/watch?v=${video.id}&ab_channel=${video.snippet.channelTitle}`}
          >
            <VideoCard info={video} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default VideoContainer;
