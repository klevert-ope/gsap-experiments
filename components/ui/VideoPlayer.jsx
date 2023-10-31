import CustomVideo from "@/components/CustomVideo";

export function VideoPlayer({ videoSrc, id, height, width }) {
  return (
    <>
      <div id={id}>
        <CustomVideo videoSrc={videoSrc} width={width} height={height} />
      </div>
    </>
  );
}
