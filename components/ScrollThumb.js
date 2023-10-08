import React, { useState, useEffect } from "react";

const ScrollThumb = () => {
  // Use object destructuring for better readability
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showThumb, setShowThumb] = useState(false);
  const [hideTimeout, setHideTimeout] = useState(null);

  const handleScroll = () => {
    // Destructure properties for clarity and brevity
    const { scrollTop } = document.documentElement;
    const content = document.getElementById("smooth-content");
    const maxScrollTop = content.scrollHeight - window.innerHeight;
    const thumbHeight = 9;

    // Calculate scroll percentage
    const percentage = (scrollTop / maxScrollTop) * (100 - thumbHeight);

    // Ensure the thumb remains visible until the end of the content
    const adjustedPercentage = Math.min(percentage, 100);

    setScrollPercentage(adjustedPercentage);

    if (scrollTop > 0) {
      setShowThumb(true);

      // Clear any existing timeout and set a new one
      clearTimeout(hideTimeout);
      const newHideTimeout = setTimeout(() => setShowThumb(false), 3000); // Adjust the delay as needed (e.g., 1000ms)
      setHideTimeout(newHideTimeout);
    }
  };

  useEffect(() => {
    // Attach the scroll event listener during component mount
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener during component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }); // Empty dependency array to run the effect only once during mount

  // Define the thumb style using an object for cleaner code
  const thumbStyle = {
    position: "fixed",
    right: "4px", // Adjust as needed
    top: `${scrollPercentage}%`,
    opacity: showThumb ? 1 : 0,
    transition: "opacity 3s",
  };

  return (
    <div style={thumbStyle}>
      <div className="z-50 h-16 w-2 rounded-lg bg-red-600" />
    </div>
  );
};

export default ScrollThumb;
