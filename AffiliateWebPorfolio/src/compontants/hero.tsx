import type React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero: React.FC = () => {
  
  return (
    <div className="py-18">

      <div className="w-full flex flex-col items-center justify-center ">
        <div className="text-center text-7xl">
          <h1 className="hero-font leading-16">
            Take Your Affiliation <br /> to Infinity and Beyond
          </h1>
        </div>

        <div className="mt-8">
          <p className="text-center text-2xl">
            Achieving unparalleled growth with affiliate marketing
          </p>
        </div>
        <div className="mt-8">
          <button className="pr-6 pt-2 pb-2 pl-6 border text-xl bg-[#d9f505] hover:bg-black hover:text-yellow-200 hover:cursor-pointer border-black rounded-4xl duration-300 transition">
            {" "}
            Start Today{" "}
          </button>
        </div>
      </div>


      
    </div>
  );
};

export default Hero;
