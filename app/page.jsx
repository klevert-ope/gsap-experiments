"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { useScrollSmoother } from "@/hooks/ui hooks/useScrollSmoother";
import ScrollThumb from "@/components/ui/ScrollThumb";
import S1 from "@/components/sections/S1";
import S2 from "@/components/sections/S2";

const queryClient = new QueryClient();
export default function Home() {
  useScrollSmoother();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <main>
              <S1 />
              <S2 />
            </main>
          </div>
        </div>
        <ScrollThumb />
      </QueryClientProvider>
    </>
  );
}
