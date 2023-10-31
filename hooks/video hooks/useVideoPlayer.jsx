import { useEffect, useRef } from "react";
import Hls from "hls.js";

export function useVideoPlayer(videoSource) {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);

  useEffect(() => {
    if (videoSource && Hls.isSupported()) {
      const video = videoRef.current;

      if (!video) {
        const newVideo = document.createElement("video");
        videoRef.current = newVideo;
      }

      hlsRef.current = new Hls();
      hlsRef.current.loadSource(videoSource);
      hlsRef.current.attachMedia(video);
      hlsRef.current.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });

      return () => {
        if (hlsRef.current) {
          hlsRef.current.off(Hls.Events.MANIFEST_PARSED);
          hlsRef.current.destroy();
        }
      };
    }
  }, [videoSource]);

  return { videoRef };
}
