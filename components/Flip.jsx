import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export default function FlipWordsDemo() {
  const words = ["better", "strong", "beautiful", "modern"];

  return (
    (<div className="h-[10rem] mt-44 flex justify-center items-center px-4">
      <div
        className="text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br/>
        Future with VJC Overseas
      </div>
    </div>)
  );
}
