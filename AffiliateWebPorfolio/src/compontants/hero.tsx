import type React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero: React.FC = () => {
  const heroHeading = useRef<HTMLHeadingElement | null>(null);
  const heroInfo = useRef<HTMLParagraphElement | null>(null);
  const heroButton = useRef<HTMLDivElement | null>(null);

  useGSAP(()=>{
    gsap.fromTo(heroHeading.current,{y:150, opacity:0} ,{y:0, opacity:1,duration:1,delay:1})
    gsap.fromTo(heroInfo.current,{y:70, opacity:0} ,{y:0, opacity:1,duration:1,delay:1.2})
    gsap.fromTo(heroButton.current,{y:200, opacity:0} ,{y:0,opacity:1,duration:1.5, delay:1, ease:"bounce.in"})
  },[])

  return (
    <div className="py-18">
      <div className="w-full flex flex-col items-center justify-center ">
        <div className="text-center text-7xl">
            <h1 ref={heroHeading} className="hero-font leading-16">
              Take Your Affiliation <br /> to Infinity and Beyond
            </h1>
        </div>

        <div className="mt-8">
          <div className="overflow-hidden">
            <p ref={heroInfo} className="text-center text-2xl">
              Achieving unparalleled growth with affiliate marketing
            </p>
          </div>
        </div>
        <div className="mt-8">
          <div className="overflow-hidden">
            <div  ref={heroButton}>
            <button
             
              className="pr-6 pt-2 pb-2 pl-6 border text-xl bg-[#d9f505] hover:bg-black hover:text-yellow-200 hover:cursor-pointer border-black rounded-4xl transition paragraph"
              >
              {" "}
              Start Today{" "}
            </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
