import type React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import officeImg from "../assets/office4.jpg";

gsap.registerPlugin(useGSAP);

const About: React.FC = () => {
  const heading11 = useRef<HTMLHeadingElement | null>(null);
  const aboutHead11 = useRef<HTMLHeadingElement | null>(null);
  const aboutPara11 = useRef<HTMLHeadingElement | null>(null);

  const imgRef = useRef<HTMLImageElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const heading12 = useRef<HTMLHeadingElement | null>(null);
  const aboutHead12 = useRef<HTMLHeadingElement | null>(null);
  const aboutPara12 = useRef<HTMLHeadingElement | null>(null);

  const heading13 = useRef<HTMLHeadingElement | null>(null);
  const aboutPara13 = useRef<HTMLParagraphElement | null>(null);
  const memberImg = useRef<HTMLImageElement | null>(null);
  const memberHead = useRef<HTMLDivElement | null>(null);
  const memberPara = useRef<HTMLParagraphElement | null>(null);
  const memberImg1 = useRef<HTMLImageElement | null>(null);
  const memberHead1 = useRef<HTMLDivElement | null>(null);
  const memberPara1 = useRef<HTMLParagraphElement | null>(null);
  const memberImg2 = useRef<HTMLImageElement | null>(null);
  const memberHead2 = useRef<HTMLDivElement | null>(null);
  const memberPara2 = useRef<HTMLParagraphElement | null>(null);
  const memberImg3 = useRef<HTMLImageElement | null>(null);
  const memberHead3 = useRef<HTMLDivElement | null>(null);
  const memberPara3 = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
    // section1
    gsap.fromTo(
      heading11.current,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: heading11.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      aboutHead11.current,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: heading11.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      aboutPara11.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: heading11.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    // img1
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

    // section2
    gsap.fromTo(
      heading12.current,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: heading12.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      aboutHead12.current,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: heading12.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      aboutPara12.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: heading12.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    // section3
    gsap.fromTo(
      heading13.current,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: heading13.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      aboutPara13.current,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: aboutPara13.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      memberImg.current,
      { opacity: 0, y: 500 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: memberImg.current,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
          // markers: true, // Uncomment for debugging
        },
      }
    );
    gsap.fromTo(
      memberHead.current,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: memberHead.current,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
          // markers: true, // Uncomment for debugging
        },
      }
    );
    gsap.fromTo(
      memberPara.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: memberPara.current,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
          // markers: true, // Uncomment for debugging
        },
      }
    );

    gsap.fromTo(
      memberImg1.current,
      { opacity: 0, y: 500 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: memberImg1.current,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
          // markers: true, // Uncomment for debugging
        },
      }
    );
    gsap.fromTo(
      memberHead1.current,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: memberHead1.current,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
          // markers: true, // Uncomment for debugging
        },
      }
    );
    gsap.fromTo(
      memberPara1.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: memberPara1.current,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
          // markers: true, // Uncomment for debugging
        },
      }
    );

    gsap.fromTo(
      memberImg2.current,
      { opacity: 0, y: 500 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: memberImg2.current,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
          // markers: true, // Uncomment for debugging
        },
      }
    );
    gsap.fromTo(
      memberHead2.current,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: memberHead2.current,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
          // markers: true, // Uncomment for debugging
        },
      }
    );
    gsap.fromTo(
      memberPara2.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: memberPara2.current,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
          // markers: true, // Uncomment for debugging
        },
      }
    );

    gsap.fromTo(
      memberImg3.current,
      { opacity: 0, y: 500 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: memberImg3.current,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
          // markers: true, // Uncomment for debugging
        },
      }
    );
    gsap.fromTo(
      memberHead3.current,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: memberHead3.current,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
          // markers: true, // Uncomment for debugging
        },
      }
    );
    gsap.fromTo(
      memberPara3.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: memberPara3.current,
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
          // markers: true, // Uncomment for debugging
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section>
      <div className="flex px-20 py-15 items-center">
        <div className="w-1/2">
          <h1 ref={heading11} className="leading-tight hero-font text-6xl ">
            Exploring AffiliateX
          </h1>
        </div>
        <div>
          <h1 ref={aboutHead11} className="mb-2 info-heading text-lg">
            Unmatched expertise in affiliate marketing
          </h1>
          <p ref={aboutPara11} className="mb-2 w-96 paragraph">
            AffiliateX provides cutting-edge affiliate marketing solutions that
            drive growth and success for both advertisers and publishers.{" "}
          </p>
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
          <h1 ref={heading12} className="leading-tight hero-font text-6xl ">
            Exploring AffiliateX
          </h1>
        </div>
        <div>
          <h1 ref={aboutHead12} className="mb-2 info-heading text-lg">
            Unmatched expertise in affiliate marketing
          </h1>
          <p ref={aboutPara12} className="mb-2 w-96 paragraph">
            AffiliateX provides cutting-edge affiliate marketing solutions that
            drive growth and success for both advertisers and publishers.{" "}
          </p>
        </div>
      </div>
      <div className="flex px-20 py-24 ">
        <div className="w-1/2 flex flex-col">
          <h1 ref={heading13} className="leading-tight hero-font text-6xl ">
            Team
          </h1>
          <p ref={aboutPara13} className="mt-4 paragraph text-lg w-lg">
            This is your Team section introductory paragraph. Utilize this space
            to introduce your team and what makes it so special, such as your
            culture and work philosophy. Don’t be afraid to illustrate
            personality and character to help users connect with your team.
          </p>
        </div>

        <div className="mt-96">
          <div className="grid grid-cols-2 grid-rows-2 gap-8">
            <div className="w-[400px]">
              <div className="overflow-hidden">
                <img
                  ref={memberImg}
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                  alt="member1"
                  className="w-[400px] h-[600px] object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <div ref={memberHead}>
                  <h2 className="mt-8 info-heading text-xl">Daniel Carter</h2>
                  <h2 className="mb-7 info-heading text-xl">Founder & CEO</h2>
                </div>
              </div>
              <div className="overflow-hidden">
                <p ref={memberPara} className="mb-2 w-full paragraph text-left">
                  Daniel is a seasoned entrepreneur with over 10 years of
                  experience in affiliate marketing and digital strategy. He
                  founded the company to empower individuals to achieve
                  financial independence through effective marketing tools and
                  strategies. His leadership and innovative approach have driven
                  the company’s rapid growth.
                </p>
              </div>
            </div>
            <div className="w-[400px]">
              <div className="overflow-hidden">
                <img
                  ref={memberImg1}
                  src="https://images.pexels.com/photos/4567833/pexels-photo-4567833.jpeg"
                  alt="member2"
                  className="w-[400px] h-[600px] object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <div ref={memberHead1}>
                  <h2 className="mt-8 info-heading text-xl">Emily Riverar</h2>
                  <h2 className="mb-7 info-heading text-xl">
                    Marketing Strategist
                  </h2>
                </div>
              </div>
              <div className="overflow-hidden">
                <p
                  ref={memberPara1}
                  className="mb-2 w-full paragraph text-left"
                >
                  Emily is the creative force behind the company’s campaigns.
                  With a knack for identifying trends and crafting compelling
                  content, she ensures affiliates have access to high-converting
                  strategies. Emily’s passion lies in helping clients unlock
                  their full earning potential.
                </p>
              </div>
            </div>
            <div className="w-[400px]">
              <div className="overflow-hidden">
                <img
                  ref={memberImg2}
                  src="https://images.pexels.com/photos/10110860/pexels-photo-10110860.jpeg"
                  alt="member3"
                  className="w-[400px] h-[600px] object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <div ref={memberHead2}>
                  <h2 className="mt-8 info-heading text-xl">Jade Patel</h2>
                  <h2 className="mb-7 info-heading text-xl">Tech Lead</h2>
                </div>
              </div>
              <div className="overflow-hidden">
                <p
                  ref={memberPara2}
                  className="mb-2 w-full paragraph text-left"
                >
                  Jade works closely with affiliates, offering personalized
                  coaching and support. With a background in sales and
                  performance marketing, she’s dedicated to ensuring every
                  partner exceeds their goals. Her approachable nature and
                  problem-solving skills make her a favorite among clients.
                </p>
              </div>
            </div>
            <div className="w-[400px]">
              <div className="overflow-hidden">
                <img
                  ref={memberImg3}
                  src="https://images.pexels.com/photos/1559193/pexels-photo-1559193.jpeg"
                  alt="member4"
                  className="w-[400px] h-[600px] object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <div ref={memberHead3}>
                  <h2 className="mt-8 info-heading text-xl">Sarah Lee</h2>
                  <h2 className="mb-7 info-heading text-xl">Tech Lead</h2>
                </div>
              </div>
              <div className="overflow-hidden">
                <p
                  ref={memberPara3}
                  className="mb-2 w-full paragraph text-left"
                >
                  Sarah is the mastermind behind the company’s user-friendly
                  platform. With a degree in software engineering and years of
                  experience in developing digital tools, she ensures the
                  technology is seamless and efficient for every affiliate to
                  thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
