import { useEffect, useRef } from "react";
import Hls from "hls.js";

function useVideoPlayer(videoSource) {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);

  useEffect(() => {
    if (videoSource && Hls.isSupported()) {
      const video = videoRef.current;
      hlsRef.current = new Hls();

      hlsRef.current.loadSource(videoSource);
      hlsRef.current.attachMedia(video);
      hlsRef.current.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
    }
  }, [videoSource]);

  return { videoRef };
}

export default useVideoPlayer;