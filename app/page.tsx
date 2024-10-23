import dynamic from 'next/dynamic';

// Dynamically import components with GSAP animations
const Photo = dynamic(() => import("@/components/Photo"), { ssr: false });
const Scroll = dynamic(() => import("@/components/Scroll"), { ssr: false });
const Particles = dynamic(() => import("@/components/particles"), { ssr: false });
import Icon from '@/components/Icon';
import RetroGrid from '@/components/retro-grid';
import Ripple from '@/components/ui/ripple';
import Test from '@/components/Test/page';
import ThreeDCardDemo from '@/components/ThreeDCardDemo';
import CoverDemo from "@/components/SpaceEffect";
import FeaturesSectionDemo from "@/components/Grid";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Track from '@/components/Track';
import AnimatedButton from "@/components/AnimatedButton";
import Flip from "@/components/Flip";
import Grid from '@/components/Grid';
import BentoGrid from '@/components/BentoGrid';
import Parallax from '@/components/Parallax';
import Tabs from '@/components/Tabs';
import ScrollDown from '@/components/ScrollDown';
import StickyScroll from '@/components/StickyScroll';
import Highlight from '@/components/Highlight';
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
   <>
   <div className="relative w-full h-screen ">
      <Particles className="absolute inset-0 z-50" />
      <div className="absolute right-6 bottom-4 z-50"><Icon/></div>
        <Photo/>
    </div>
   <Parallax/>
    {/* <Scroll/> */}
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
  {/* <StickyScroll/> */}
  <Highlight/>
  <Track/>
  </>
  );
}

