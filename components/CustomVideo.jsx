import { useVideoPlayer } from "@/hooks/video hooks/useVideoPlayer";
import { useVideoFetcher } from "@/hooks/video hooks/useVideoFetcher";
import VideoLoader from "@/components/ui/VideoLoader";

function CustomVideo({ videoSrc, height, width }) {
  const { videoSource, isLoading, isError } = useVideoFetcher(videoSrc);
  const { videoRef } = useVideoPlayer(videoSource);

  if (isError) {
    return <div>Error loading video</div>;
  }

  return (
    <>
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
    </>
  );
}

export default CustomVideo;
