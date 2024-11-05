"use client";

import Image from "next/image";
import { Tabs } from "@/components/ui/tabs";

export default function TabsDemo() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white" style={{ backgroundColor: "#a5a5a5" }}>
          <p>Product Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white" style={{ backgroundColor: "#a5a5a5" }}>
          <p>Services Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white" style={{ backgroundColor: "#a5a5a5" }}>
          <p>Playground Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white" style={{ backgroundColor: "#a5a5a5" }}>
          <p>Content Tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white" style={{ backgroundColor: "#a5a5a5" }}>
          <p>Random Tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];
  
      
      

  return (
    (<div
      className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10 mb-36">
      <Tabs tabs={tabs} />
    </div>)
  );
}

const DummyContent = () => {
  return (
    (<Image
      src="/visa.jpg"
      alt="dummy image"
      width="1000"
      height="500"
      className="object-cover object-left-top mt-10 h-[30%]  md:h-[90%] absolute  inset-x-0 w-[90%] rounded-xl mx-auto" />)
  );
};
