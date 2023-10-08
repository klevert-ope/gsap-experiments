"use client";

import { useScrollSmoother } from "@/hooks/useScrollSmoother";
import ScrollThumb from "@/components/ScrollThumb";

export default function Home() {
  useScrollSmoother();

  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <h1 className=" text-center text-5xl font-bold text-black underline">
            GSAP EXPERIMENT
          </h1>
          <section>
            <h2 className=" mt-5 text-orange-500">
              The Technological Renaissance
            </h2>
            <p data-lag="0.3">
              In the not-so-distant future, technology had evolved beyond what
              anyone had ever imagined. It was a time of unprecedented
              innovation and progress, a period often referred to as the
              Technological Renaissance.
            </p>
            <p data-lag="0.5">
              One of the most remarkable advancements was in the field of
              healthcare. Medical nanobots had become commonplace, coursing
              through our veins, detecting and repairing any issues before they
              could become a problem. People lived longer, healthier lives, and
              diseases that once plagued humanity were now a distant memory. The
              concept of a cure was nearly obsolete, as ailments were nipped in
              the bud before they could even manifest symptoms.
            </p>
          </section>
          <section className=" bg-orange-400"></section>
          <section>
            <p data-lag="0.3" data-speed="0.8">
              In the world of transportation, flying cars had transitioned from
              science fiction to reality. Cities had sprawling networks of
              automated aerial taxis, eliminating traffic congestion and
              significantly reducing pollution. Electric and self-driving
              vehicles had become the norm, making accidents a rarity. The
              streets were quieter, and the air was cleaner.
            </p>
            <p data-lag="0.5">
              Education had transformed as well. Traditional classrooms were a
              thing of the past. Students now entered virtual reality
              environments where they could explore history, travel to different
              eras, and interact with historical figures. Learning was not
              confined by location or time, making quality education accessible
              to all, regardless of their circumstances.
            </p>
          </section>
          <section className=" bg-blue-400"></section>
          <section className=" bg-blue-400"></section>
        </div>
      </div>
      <ScrollThumb />
    </>
  );
}
