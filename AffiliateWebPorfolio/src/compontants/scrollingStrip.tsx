import type React from "react";
import { FaPhone } from "react-icons/fa6";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const ScrollingStrip: React.FC = () => {
   const scrollingStrip = useRef<HTMLDivElement | null>(null);

   useGSAP(()=>{
      gsap.fromTo(scrollingStrip.current, {y:-60},{y:0, duration:1.5})
   },[])

  return (
    <div  ref={scrollingStrip} className="overflow-hidden w-full h-10 py-1" style={{ backgroundColor: '#d9f505' }}>
      <div className="flex justify-center items-center h-full whitespace-nowrap animate-scroll-right">
        <div className="flex items-center mr-5">
            <div className="mr-5">
                <FaPhone className="text-sm "/>
            </div>
            <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
        <div className="flex items-center mr-5">
            <div className="mr-5">
               <FaPhone className="text-sm "/>
            </div>
           <span className=" text-xl font-light">Call Us Now</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollingStrip;