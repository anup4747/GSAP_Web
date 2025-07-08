import type React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import officeImg from "../assets/office4.jpg"
import profile1 from "../assets/profile1.jpg"
import profile2 from "../assets/profile2.jpg"
import profile3 from "../assets/profile3.jpg"
import profile4 from "../assets/profile4.jpg"

gsap.registerPlugin(useGSAP);

const profiles = [
    {
      name: "Daniel Carter",
      title: "Founder & CEO",
      description:
        "Daniel is a seasoned entrepreneur with over 10 years of experience in affiliate marketing and digital strategy. He founded the company to empower individuals to achieve financial independence through effective marketing tools and strategies. His leadership and innovative approach have driven the company’s rapid growth.",
      image: profile1,
    },
    {
      name: "Emily Rivera",
      title: "Marketing Strategist",
      description:
      "Emily is the creative force behind the company’s campaigns. With a knack for identifying trends and crafting compelling content, she ensures affiliates have access to high-converting strategies. Emily’s passion lies in helping clients unlock their full earning potential.",
      image: profile2,
    },
    {
      name: "Michael Lee",
      title: "Tech Lead",
      description:
        "Jade works closely with affiliates, offering personalized coaching and support. With a background in sales and performance marketing, she’s dedicated to ensuring every partner exceeds their goals. Her approachable nature and problem-solving skills make her a favorite among clients.",
      image: profile3,
    },
    {
      name: "Sarah Lee",
      title: "Tech Lead",
      description:
        "Sarah is the mastermind behind the company’s user-friendly platform. With a degree in software engineering and years of experience in developing digital tools, she ensures the technology is seamless and efficient for every affiliate to thrive.",
      image: profile4,
    },
  ];

const About: React.FC = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
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
  }, []);
  return <section>

    <div className="flex px-20 py-15 items-center">
      <div className="w-1/2">
        <h1 className="leading-tight hero-font text-6xl ">
          Exploring AffiliateX</h1>
      </div>
      <div>
        <h1 className="mb-2 info-heading text-lg">Unmatched expertise in affiliate marketing</h1>
        <p className="mb-2 w-96 paragraph">AffiliateX provides cutting-edge affiliate marketing solutions that drive growth and success for both advertisers and publishers. </p>
      </div>
    </div>

     <div className="w-full mt-15 flex justify-center">
        <div
          ref={wrapperRef}
          className="w-full max-w-[2000px] h-[500px] overflow-hidden"
        >
          <img
            ref={imgRef}
            src={officeImg}
            alt="Office"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex px-20 py-24 items-center bg-[#ddf800]">
      <div className="w-1/2">
        <h1 className="leading-tight hero-font text-6xl ">
          Exploring AffiliateX</h1>
      </div>
      <div>
        <h1 className="mb-2 info-heading text-lg">Unmatched expertise in affiliate marketing</h1>
        <p className="mb-2 w-96 paragraph">AffiliateX provides cutting-edge affiliate marketing solutions that drive growth and success for both advertisers and publishers. </p>
      </div>

    </div>
      <div className="flex px-20 py-24 ">
      <div className="w-1/2 flex flex-col">
        <h1 className="leading-tight hero-font text-6xl ">
          Team</h1>
          <p className="mt-4 paragraph text-lg w-lg">This is your Team section introductory paragraph. Utilize this space to introduce your team and what makes it so special, such as your culture and work philosophy. Don’t be afraid to illustrate personality and character to help users connect with your team.</p>
      </div>

      <div className="mt-96">
          <div className="grid grid-cols-2 grid-rows-2 gap-8">
        {profiles.map((profile, index) => (
          <div key={index} className="w-[400px]">
            <div>
              <img src={profile.image} alt={profile.name} className="w-[400px] h-[600px] object-cover" />
            </div>
            <h2 className="mt-5 info-heading text-xl">{profile.name}</h2>
            <h2 className="mb-5 info-heading text-xl">{profile.title}</h2>
            <p className="mb-2 w-full paragraph text-left">{profile.description}</p>
          </div>
        ))}
      </div>
      </div>
    </div>



  </section>;
};

export default About;
