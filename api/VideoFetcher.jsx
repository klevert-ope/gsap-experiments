import config from "@/config";
import { useQuery } from "react-query";

function VideoFetcher(videoSrc) {
  const fetchVideo = async (videoPath) => {
    const supabaseURL = "https://essmnbcneybekiriuadi.supabase.co";
    const supabaseAnonKey = config.SUPABASE_ANON_KEY;

    try {
      const response = await fetch(
        `${supabaseURL}/storage/v1/object/public/${videoPath}`,
        {
          headers: {
            apikey: supabaseAnonKey,
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch video");
      }

      return response.url;
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };

  // Use react-query to fetch the video URL
  const { data: videoSource } = useQuery(["video", videoSrc], () =>
    fetchVideo(videoSrc),
  );

  return {
    videoSource,
  };
}

export default VideoFetcher;
