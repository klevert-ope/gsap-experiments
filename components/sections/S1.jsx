import { VideoLaptop, VideoMobile } from "@/components/VideoIntro";

const S1 = () => {
  return (
    <>
      <section className=" z-50 ">
        <VideoLaptop />
        <VideoMobile />
        <h1 className=" pt-5 text-center font-bold text-black">
          GSAP EXPERIMENT
        </h1>
        <h2 data-lag="0.1" className=" layout pt-5 text-orange-500">
          The Technological Renaissance
        </h2>
        <p data-lag="0.2" className="layout">
          In the not-so-distant future, technology had evolved beyond what
          anyone had ever imagined. It was a time of unprecedented innovation
          and progress, a period often referred to as the Technological
          Renaissance.
        </p>
        <p data-lag="0.3" className="layout">
          One of the most remarkable advancements was in the field of
          healthcare. Medical nanobots had become commonplace, coursing through
          our veins, detecting and repairing any issues before they could become
          a problem. People lived longer, healthier lives, and diseases that
          once plagued humanity were now a distant memory. The concept of a cure
          was nearly obsolete, as ailments were nipped in the bud before they
          could even manifest symptoms.
        </p>
      </section>
    </>
  );
};

export default S1;
