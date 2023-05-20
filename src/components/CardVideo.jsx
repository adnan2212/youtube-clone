const VideoCard = ({ info }) => {
  return (
    <div className="m-2 w-72 cursor-pointer p-2 shadow-lg">
      <img
        className="rounded-lg"
        src={info.snippet.thumbnails.medium.url}
        alt={info.snippet.title}
      />
      <h1 className="py-2 font-semibold">{info.snippet.title}</h1>
      <h1 className="text-sm">{info.snippet.channelTitle}</h1>
      <p className="">{info.statistics.viewCount} views</p>
    </div>
  );
};

export default VideoCard;
