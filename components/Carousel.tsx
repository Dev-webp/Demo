"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      {/* <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your Status.
      </h2> */}
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes.
            </p>
          </div>
        );
      })}
    </>
  );
};

const data = [
    {
      category: "Immigration",
      title: "Explore Global Opportunities.",
      src: "/immi.jpg",
      content: (
        <ul className="space-y-1 list-disc list-inside text-base text-neutral-700 dark:text-neutral-300 ml-10">
          <li className="font-semibold">Visa consulting services</li>
          <li className="font-semibold">Country-specific guidance</li>
          <li className="font-semibold">Settlement advice</li>
          <li className="font-semibold">Cultural transition tips</li>
        </ul>
      ),
    },
    {
      category: "Work Visas",
      title: "Find the Right Work Visa for You.",
      src: "/wrvisa.jpg",
      content: (
        <ul className="space-y-1 list-disc list-inside text-base text-neutral-700 dark:text-neutral-300 ml-10">
          <li className="font-semibold">Visa application help</li>
          <li className="font-semibold">Requirements checklist</li>
          <li className="font-semibold">Interview preparation</li>
          <li className="font-semibold">Document review</li>
        </ul>
      ),
    },
    {
      category: "Student Visas",
      title: "Study Abroad with Ease.",
      src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: (
        <ul className="space-y-1 list-disc list-inside text-base text-neutral-700 dark:text-neutral-300 ml-10">
          <li className="font-semibold">University selection</li>
          <li className="font-semibold">Visa process guidance</li>
          <li className="font-semibold">Scholarship info</li>
          <li className="font-semibold">Language requirements</li>
        </ul>
      ),
    },
    {
      category: "Permanent Residency",
      title: "Your Path to Residency.",
      src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: (
        <ul className="space-y-1 list-disc list-inside text-base text-neutral-700 dark:text-neutral-300 ml-10">
          <li className="font-semibold">PR eligibility check</li>
          <li className="font-semibold">Document assistance</li>
          <li className="font-semibold">Application tracking</li>
          <li className="font-semibold">Post-approval support</li>
        </ul>
      ),
    },
    {
      category: "Travel Visas",
      title: "Smooth Travel Visa Process.",
      src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: (
        <ul className="space-y-1 list-disc list-inside text-base text-neutral-700 dark:text-neutral-300 ml-10">
          <li className="font-semibold">Quick visa approvals</li>
          <li className="font-semibold">Documentation help</li>
          <li className="font-semibold">Travel guidelines</li>
          <li className="font-semibold">Emergency support</li>
        </ul>
      ),
    },
    {
      category: "Job Placement",
      title: "Connecting You with Global Employers.",
      src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: (
        <ul className="space-y-1 list-disc list-inside text-base text-neutral-700 dark:text-neutral-300 ml-10">
          <li className="font-semibold">Job matching services</li>
          <li className="font-semibold">Resume enhancement</li>
          <li className="font-semibold">Interview coaching</li>
          <li className="font-semibold">Contract negotiation</li>
        </ul>
      ),
    },
  ];
  
  
