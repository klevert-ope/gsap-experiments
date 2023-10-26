"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { useScrollSmoother } from "@/hooks/useScrollSmoother";
import ScrollThumb from "@/components/ui/ScrollThumb";
import S1 from "@/components/sections/S1";
import S2 from "@/components/sections/S2";
import VideoMobile from "@/components/VideoMobile";
import VideoLaptop from "@/components/VideoLaptop";

const queryClient = new QueryClient();
export default function Home() {
  useScrollSmoother();
  return (
    <>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <QueryClientProvider client={queryClient}>
            <VideoLaptop />
            <VideoMobile />
          </QueryClientProvider>
          <S1 />
          <S2 />
        </div>
      </div>
      <ScrollThumb />
    </>
  );
}
