import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

import { closeMenu } from "../store/appSlice";

const WatchPage = () => {
  const [video, setVideo] = useState({});
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    getVideoById(searchParams.get("v"));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getVideoById = async (id) => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyAkKWOvWEZnk0MwS-EcN6Y_8bzNbeMTGng`
    );
    const json = await data.json();
    setVideo(json.items);
  };

  return (
    <div className="px-4">
      <iframe
        width="850"
        height="450"
        src={`https://www.youtube.com/embed/${searchParams.get(
          "v"
        )}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
