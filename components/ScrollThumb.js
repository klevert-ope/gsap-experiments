import useScrollThumb from "@/hooks/useScrollThumb";

const ScrollThumb = () => {
  const { scrollPercentage, showThumb } = useScrollThumb();

  const thumbStyle = {
    position: "fixed",
    right: "4px", // Adjust as needed
    top: `${scrollPercentage}%`,
    opacity: showThumb ? 1 : 0,
    transition: "opacity 0.5s",
  };

  return (
    <div style={thumbStyle}>
      <div className="z-50 h-16 w-2 rounded-lg bg-red-600" />
    </div>
  );
};

export default ScrollThumb;
