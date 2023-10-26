import { AspectRatio } from "react-aspect-ratio";
import VideoFetcher from "@/api/VideoFetcher";
import useVideoPlayer from "@/hooks/useVideoPlayer";
import ContentLoader from "react-content-loader";

function CustomVideo({ videoSrc, aspectRatio }) {
  const { videoSource } = VideoFetcher(videoSrc);
  const { videoRef } = useVideoPlayer(videoSource);

  const VideoLoader = () => (
    <ContentLoader
      speed={2}
      width="100%"
      height="100%"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
    </ContentLoader>
  );

  return (
    <div>
      <AspectRatio ratio={aspectRatio}>
        {videoSource ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source src={videoSource} type="application/x-mpegURL" />
          </video>
        ) : (
          <VideoLoader />
        )}
      </AspectRatio>
    </div>
  );
}

export default CustomVideo;
