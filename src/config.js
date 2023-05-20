const GOOGLE_API_KEY = "AIzaSyAkKWOvWEZnk0MwS-EcN6Y_8bzNbeMTGng";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_BY_ID = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=TWQjWLwY9ZE&key=${GOOGLE_API_KEY}`;
