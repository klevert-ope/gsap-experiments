import CustomVideo from "@/components/CustomVideo";

function VideoLaptop() {
  const videoSrc =
    "curology/video/background%20video/large%20screen/large.m3u8";
  const aspectRatio = "12.5 / 6";

  return (
    <div id="Laptop">
      <CustomVideo videoSrc={videoSrc} aspectRatio={aspectRatio} />
    </div>
  );
}

export default VideoLaptop;
