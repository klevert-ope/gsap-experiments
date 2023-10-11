import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollSmoother from "gsap/dist/ScrollSmoother.js";
import ScrollTrigger from "gsap/dist/ScrollTrigger.js";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export function useScrollSmoother() {
  useLayoutEffect(() => {
    const initializeScrollSmoother = async () => {
      gsap.config({
        auth: process.env.gsap_authToken,
      });

      const gsapContext = gsap.context(() => {
        ScrollTrigger.normalizeScroll(true);

        const scrollSmoother = ScrollSmoother.create({
          wrapper: "#smooth-wrapper",
          content: "#smooth-content",
          smooth: 2,
          effects: true,
          smoothTouch: 0.1,
        });

        return () => {
          scrollSmoother.kill();
        };
      });

      return () => gsapContext.revert();
    };

    initializeScrollSmoother();
  }, []);
}
