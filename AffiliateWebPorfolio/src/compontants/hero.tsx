import type React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import officeImg from "../assets/office1.jpg";
import officeImg2 from "../assets/office2.jpg"
import officeImg3 from "../assets/office3.jpg"
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero: React.FC = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const img2Ref = useRef<HTMLImageElement | null>(null);
  const wrapper2Ref = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    gsap.to(".box", { rotation: "+=360", duration: 3 });

    if (imgRef.current && wrapperRef.current) {
      gsap.fromTo(
        imgRef.current,
        { scale: 1.3 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%", // Start when the top of the image hits 80% of the viewport
            end: "bottom 20%", // End when the bottom of the image hits 20% of the viewport
            scrub: true, // Smoothly animate with scroll
            markers: false, // Set to true for debugging
          },
        }
      );
    }
    if (img2Ref.current && wrapper2Ref.current) {
      gsap.fromTo(
        img2Ref.current,
        { scale: 1.3 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper2Ref.current,
            start: "top 80%", // Start when the top of the image hits 80% of the viewport
            end: "bottom 20%", // End when the bottom of the image hits 20% of the viewport
            scrub: true, // Smoothly animate with scroll
            markers: false, // Set to true for debugging
          },
        }
      );
    }
  }, []);
  return (
    <section className="mt-18 ">
      <div className="w-full flex flex-col items-center justify-center ">
        <div className="text-center text-7xl">
          <h1 className="hero-font">
            Take Your Affiliation <br /> to Infinity and Beyond
          </h1>
        </div>

        <div className="mt-10">
          <p className="text-center text-2xl">
            Achieving unparalleled growth with affiliate marketing
          </p>
        </div>
        <div className="mt-8">
          <button className="pr-6 pt-4 pb-4 pl-6 border text-xl bg-[#d9f505] hover:bg-black hover:text-yellow-200 hover:cursor-pointer border-black rounded-4xl ">
            {" "}
            Start now{" "}
          </button>
        </div>
      </div>
      <div className="w-full mt-15 flex justify-center">
        <div
          ref={wrapperRef}
          className="w-full max-w-[2000px] h-[600px] overflow-hidden"
        >
          <img
            ref={imgRef}
            src={officeImg}
            alt="Office"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex h-full">
        <div className="bg-[#d9f505] hero-font text-7xl w-1/2 p-24">
          <h1 className="leading-tight">
            Why Choose <br /> Vellisy?
          </h1>
        </div>
        <div className="w-1/2 p-32 flex flex-col justify-center ">
          <div className="mb-11">
            <h3 className="mb-2 info-heading text-lg">
              85% success rate among clients
            </h3>
            <p className="mb-2 w-96 paragraph">
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
          <div className="mb-12">
            <h3 className="mb-2 info-heading text-lg">
              Seamless integration with different platforms
            </h3>
            <p className="mb-2  w-96 paragraph">
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
          <div>
            <h3 className="mb-2 info-heading text-lg">
              Dedicated account managers
            </h3>
            <p className="mb-2 w-96 paragraph">
              {" "}
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#e6e6e6] p-34">
        <div className="w-full hero-font text-6xl mb-14">
          <h1>
            Maximize Your <br /> Earnings Potential
          </h1>
        </div>
        <div className="flex gap-x-96">
          <div>
            <h3 className="mb-5 info-heading text-lg">
              Solutions for Publishers
            </h3>
            <p className="mb-2 w-96 paragraph">
              {" "}
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
            <button className="pr-4 pt-2 pb-2 pl-4 mt-2 border bg-[#d9f505] hover:bg-black hover:text-yellow-200 hover:cursor-pointer border-black rounded-4xl ">
              {" "}
              Learn More
            </button>
          </div>
          <div className="ml-24">
            <h3 className="mb-5 info-heading text-lg">
              Solutions for Advertisers
            </h3>
            <p className="mb-2 w-96 paragraph">
              {" "}
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
            <button className="pr-4 pt-2 pb-2 pl-4 mt-2 border bg-[#d9f505] hover:bg-black hover:text-yellow-200 hover:cursor-pointer border-black rounded-4xl ">
              {" "}
              Learn More
            </button>
          </div>
        </div>
      </div>

       <div className="w-full flex justify-center">
        <div
          ref={wrapper2Ref}
          className="w-full max-w-[2000px] h-[600px] overflow-hidden"
        >
          <img
            ref={img2Ref}
            src={officeImg2}
            alt="Office"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="bg-[#f3ffa8]"> 
         <div className="w-full hero-font text-6xl mb-14">
          <h1>
            Partnerships <br /> that matter
          </h1>
        </div>

        <div>
          <p>This is your Client section introductory paragraph. It’s a great space to talk about the companies you represent or collaborate with on specific projects. Add your clients’ logos below to create a quick and effective visual representation of your relationships.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
