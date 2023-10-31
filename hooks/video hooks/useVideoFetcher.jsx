import { useQuery } from "react-query";
import { fetchVideo } from "@/api/VideoFetcher";

export function useVideoFetcher(videoSrc) {
  const {
    data: videoSource,
    isLoading,
    isError,
  } = useQuery(["video", videoSrc], () => fetchVideo(videoSrc));

  return {
    videoSource,
    isLoading,
    isError,
  };
}
