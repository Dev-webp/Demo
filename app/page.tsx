import dynamic from 'next/dynamic';

// Dynamically import components
const Photo = dynamic(() => import("@/components/Photo"), { ssr: false });
const Particles = dynamic(() => import("@/components/particles"), { ssr: false });
const Icon = dynamic(() => import('@/components/Icon'), { ssr: false });
const Ripple = dynamic(() => import('@/components/ui/ripple'), { ssr: false });
const Test = dynamic(() => import('@/components/Test/page'), { ssr: false });
const ThreeDCardDemo = dynamic(() => import('@/components/ThreeDCardDemo'), { ssr: false });
const CoverDemo = dynamic(() => import('@/components/SpaceEffect'), { ssr: false });
const FeaturesSectionDemo = dynamic(() => import('@/components/Grid'), { ssr: false });
const AnimatedButton = dynamic(() => import('@/components/AnimatedButton'), { ssr: false });
const Flip = dynamic(() => import('@/components/Flip'), { ssr: false });
const BentoGrid = dynamic(() => import('@/components/BentoGrid'), { ssr: false });
const Parallax = dynamic(() => import('@/components/Parallax'), { ssr: false });
const Tabs = dynamic(() => import('@/components/Tabs'), { ssr: false });
const ScrollDown = dynamic(() => import('@/components/ScrollDown'), { ssr: false });
const Highlight = dynamic(() => import('@/components/Highlight'), { ssr: false });
const Nav = dynamic(() => import('@/components/Nav'), { ssr: false });
const Scroll = dynamic(() => import("@/components/Scroll"), { ssr: false });
import { AppleCardsCarouselDemo } from '@/components/Carousel';

export default function Home() {
  return (
   <>
     <div className="relative w-full h-screen ">
       <Particles className="absolute inset-0 z-50" />
       <div className="absolute right-6 bottom-4 z-50"><Icon/></div>
       <Photo/>
     </div>
     {/* <Nav/> */}
     <Parallax/>
     <div className="relative w-full h-screen ">
       <Ripple className="absolute inset-0 z-50" />
       <Test/>
     </div>
     <ScrollDown/>
     <CoverDemo/>
     <ThreeDCardDemo/>
     <FeaturesSectionDemo/>
     <AnimatedButton/>
     <BentoGrid/>
     <Tabs/>
     <Flip/>
     <Highlight/>
     {/* <Scroll/> */}
     <AppleCardsCarouselDemo/>
   </>
  );
}
