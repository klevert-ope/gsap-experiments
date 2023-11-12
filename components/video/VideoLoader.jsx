import ContentLoader from "react-content-loader";

const VideoLoader = () => (
  <div id="video-loader">
    <ContentLoader
      ltr="true"
      speed={5}
      width="100%"
      height="100%"
      backgroundColor="#ebeaea"
      foregroundColor="#fffafa"
    >
      <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
    </ContentLoader>
  </div>
);

export default VideoLoader;
