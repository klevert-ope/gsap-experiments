import { useVideoFetcher } from "@/hooks/video/useVideoFetcher";
import { useVideoPlayer } from "@/hooks/video/useVideoPlayer";
import dynamic from "next/dynamic";

const VideoLoader = dynamic(() => import("@/components/Video/VideoLoader"));

function CustomVideo({ videoSrc, height, width }) {
  const { videoSource, isLoading, isError } = useVideoFetcher(videoSrc);
  const { videoRef } = useVideoPlayer(videoSource);

  if (isError) {
    return <div>Error loading video</div>;
  }

  return (
    <div>
      {isLoading ? (
        <VideoLoader />
      ) : videoSource ? (
        <video
          ref={videoRef}
          width={width}
          height={height}
          autoPlay
          loop
          muted
          className="w-full object-contain"
        >
          <source src={videoSource} type="application/x-mpegURL" />
        </video>
      ) : null}
    </div>
  );
}

export default CustomVideo;
