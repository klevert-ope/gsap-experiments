import { useEffect } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother.js";
import ScrollTrigger from "gsap/dist/ScrollTrigger.js";

// Register GSAP plugins
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export function useScrollSmoother() {
  useEffect(() => {
    const initializeScrollSmoother = async () => {
      // Configure GSAP with authentication token and other options
      gsap.config({
        auth: process.env.gsap_authToken,
      });

      // Create a GSAP context
      const gsapContext = gsap.context(() => {
        // Normalize scroll behavior
        ScrollTrigger.normalizeScroll(true);

        // Create the ScrollSmoother instance
        const scrollSmoother = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 2,
          effects: true,
          smoothTouch: 0.1,
        });

        // Return a cleanup function
        return () => {
          scrollSmoother.kill();
        };
      });

      // Revert the GSAP context on unmount
      return () => gsapContext.revert();
    };

    // Initialize ScrollSmoother when the component mounts
    initializeScrollSmoother();
  }, []); // Run this effect only once on component mount
}
