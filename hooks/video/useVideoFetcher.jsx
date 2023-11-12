import { fetchVideo } from "@/api/VideoFetcher";
import { useCallback } from "react";
import { useQuery } from "react-query";

export function useVideoFetcher(videoSrc) {
  const queryKey = ["video", videoSrc];

  const fetchVideoMemoized = useCallback(
    () => fetchVideo(videoSrc),
    [videoSrc],
  );

  const { data: videoSource, status } = useQuery(queryKey, fetchVideoMemoized, {
    enabled: !!videoSrc,
    staleTime: 60000,
    cacheTime: 3600000,
  });

  const isLoading = status === "loading";
  const isError = status === "error";

  return {
    videoSource,
    isLoading,
    isError,
  };
}
