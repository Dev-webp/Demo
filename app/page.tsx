import dynamic from 'next/dynamic';

// Dynamically import components with GSAP animations
const Photo = dynamic(() => import("@/components/Photo"), { ssr: false });
const Particles = dynamic(() => import("@/components/particles"), { ssr: false });
import Icon from '@/components/Icon';

import Ripple from '@/components/ui/ripple';
import Test from '@/components/Test/page';
import ThreeDCardDemo from '@/components/ThreeDCardDemo';
import CoverDemo from "@/components/SpaceEffect";
import FeaturesSectionDemo from "@/components/Grid";
import AnimatedButton from "@/components/AnimatedButton";
import Flip from "@/components/Flip";
import BentoGrid from '@/components/BentoGrid';
import Parallax from '@/components/Parallax';
import Tabs from '@/components/Tabs';
import ScrollDown from '@/components/ScrollDown';
import Highlight from '@/components/Highlight';

export default function Home() {
  return (
   <>
   <div className="relative w-full h-screen ">
      <Particles className="absolute inset-0 z-50" />
      <div className="absolute right-6 bottom-4 z-50"><Icon/></div>
        <Photo/>
    </div>
   <Parallax/>
   <div className="relative w-full h-screen ">
        <Ripple className="absolute inset-0 z-50" />
        <Test/>
   </div>
  <ScrollDown/>
  <CoverDemo/>
  <ThreeDCardDemo/>
  < FeaturesSectionDemo/>
  <AnimatedButton/>
  <BentoGrid/>
  <Tabs/>
  <Flip/>
  <Highlight/>
  </>
  );
}

