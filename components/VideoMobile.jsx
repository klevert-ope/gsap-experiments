import CustomVideo from "@/components/CustomVideo";

function VideoMobile() {
  const videoSrc = "curology/video/background%20video/mobile/mobile.m3u8";
  const aspectRatio = "300 / 533";

  return (
    <div id="Mobile">
      <CustomVideo videoSrc={videoSrc} aspectRatio={aspectRatio} />
    </div>
  );
}

export default VideoMobile;
