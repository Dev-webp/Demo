"use client";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollContent = () => {
  useEffect(() => {
    const section = document.querySelector('.grid-section');
    const grids = document.querySelectorAll('.grid-item');
    
    // Correct total scrollable width based on grid items
    const totalScrollableWidth = section.scrollWidth - window.innerWidth;

    gsap.to(grids, {
      xPercent: -100 * (grids.length - 1),
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '.grid-section',
        start: 'top top',
        end: () => `+=${totalScrollableWidth}`, // The correct end value
        pin: true,
        scrub: 1,
        snap: 1 / (grids.length - 1),
      },
    });

    // Cleanup ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      {/* Wrapper for Horizontal Grid Section */}
      <div className="horizontal-scroll-wrapper">
        <div className="grid-section flex w-[500vw] h-screen">
          <div className="grid-item flex flex-col justify-center items-center w-screen h-full bg-neutral-300 text-white p-10">
           
            
          </div>
          <div className="grid-item flex flex-col justify-center items-center w-screen h-full bg-gray-200 text-white p-10">
           
          </div>
          <div className="grid-item flex flex-col justify-center items-center w-screen h-full bg-neutral-300 text-white p-10">
           
          </div>
          <div className="grid-item flex flex-col justify-center items-center w-screen h-full bg-gray-200 text-white p-10">
          
          </div>
          <div className="grid-item flex flex-col justify-center items-center w-screen h-full bg-neutral-300 text-white p-10">
           
          </div>
        </div>
      </div>


      {/* Next Section */}
      {/* <div className="next-section w-full h-screen bg-gray-100 flex justify-center items-center">
        <h2 className="text-3xl font-sans uppercase">Next Section (After Content Blocks)</h2>
      </div> */}
    </div>
  );
};

export default HorizontalScrollContent;
