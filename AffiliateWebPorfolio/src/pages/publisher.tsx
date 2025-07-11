import type React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import laptopImg from "../assets/laptop.jpg";
import { useRef } from "react";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(useGSAP);

const Publisher: React.FC = () => {
  // section1
  const heading11 = useRef<HTMLHeadingElement | null>(null);
  const aboutHead11 = useRef<HTMLHeadingElement | null>(null);
  const aboutPara11 = useRef<HTMLHeadingElement | null>(null);

  // section2
  const heading12 = useRef<HTMLHeadingElement | null>(null);
  const servicesHead1 = useRef<HTMLHeadingElement | null>(null);
  const servicesPara1 = useRef<HTMLParagraphElement | null>(null);
  const servicesHead2 = useRef<HTMLHeadingElement | null>(null);
  const servicesPara2 = useRef<HTMLParagraphElement | null>(null);
  const servicesHead3 = useRef<HTMLHeadingElement | null>(null);
  const servicesPara3 = useRef<HTMLParagraphElement | null>(null);
  const servicesHead4 = useRef<HTMLHeadingElement | null>(null);
  const servicesPara4 = useRef<HTMLParagraphElement | null>(null);
  const hr1Refs = useRef<HTMLHRElement | null>(null);
  const hr2Refs = useRef<HTMLHRElement | null>(null);
  const hr3Refs = useRef<HTMLHRElement | null>(null);
  const ctnBtn = useRef<HTMLButtonElement | null>(null);

  useGSAP(() => {
    
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
      servicesHead1.current,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: servicesHead1.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      servicesHead2.current,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: servicesHead2.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      servicesHead3.current,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: servicesHead3.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      servicesHead4.current,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: servicesHead4.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    gsap.fromTo(
      servicesPara1.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: servicesPara1.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      servicesPara2.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: servicesPara2.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      servicesPara3.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: servicesPara3.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      servicesPara4.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: servicesPara4.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      hr1Refs.current,
      { scaleX: 0, transformOrigin: "left" },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: hr1Refs.current,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      hr2Refs.current,
      { scaleX: 0, transformOrigin: "left" },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: hr2Refs.current,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      hr3Refs.current,
      { scaleX: 0, transformOrigin: "left" },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: hr3Refs.current,
          start: "top 90%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    gsap.fromTo(
      ctnBtn.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.1,
        scrollTrigger: {
          trigger: ctnBtn.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
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
            Publishers and <br /> AffiliateX
          </h1>
        </div>
        <div>
          <h1 ref={aboutHead11} className="mb-2 info-heading text-lg">
            Maximizing your earning potential
          </h1>
          <p ref={aboutPara11} className="mb-2 w-96 paragraph">
            We provide publishers the resources and support necessary to
            optimize and monetize their content effectively.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[2000px] h-[500px] overflow-hidden">
          <img
            src={laptopImg}
            alt="Office"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className=" px-20 py-15 ">
        <div className="w-1/2">
          <h1 ref={heading12} className="leading-tight hero-font text-6xl ">
            Publisher Services
          </h1>
        </div>
        <div className="flex mt-20 mb-26">
          <div className="w-1/2">
            <div className="overflow-hidden">
              <h1 ref={servicesHead1} className="mb-2 info-heading text-lg">
                Profit Optimization
              </h1>
            </div>
          </div>
          <div>
            <div className="overflow-hidden">
              <p ref={servicesPara1} className="mb-2 w-96 paragraph">
                I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users
                know a little more about you.
              </p>
            </div>
          </div>
        </div>

        <hr ref={hr1Refs} className="border-b border w-full" />

        <div className="flex mt-10 mb-26">
          <div className="w-1/2">
            <div className="overflow-hidden">
              <h1 ref={servicesHead2} className="mb-2 info-heading text-lg">
                Content Monetization
              </h1>
            </div>
          </div>
          <div>
            <p ref={servicesPara2} className="mb-2 w-96 paragraph">
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
        </div>

        <hr ref={hr2Refs} className="border-b border w-full" />

        <div className="flex mt-10 mb-26">
          <div className="w-1/2">
            <div className="overflow-hidden">
              <h1 ref={servicesHead3} className="mb-2 info-heading text-lg">
                Audience Engagement
              </h1>
            </div>
          </div>
          <div>
            <div className="overflow-hidden">
              <p ref={servicesPara3} className="mb-2 w-96 paragraph">
                I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users
                know a little more about you.
              </p>
            </div>
          </div>
        </div>

        <hr ref={hr3Refs} className="border-b border w-full" />

        <div className="flex mt-10 mb-26">
          <div className="w-1/2">
            <div className="overflow-hidden">
              <h1 ref={servicesHead4} className="mb-2 info-heading text-lg">
                Fraud detection and Prevention
              </h1>
            </div>
          </div>
          <div>
            <div className="overflow-hidden">
              <p ref={servicesPara4} className="mb-2 w-96 paragraph">
                I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users
                know a little more about you.
              </p>
            </div>
          </div>
        </div>
        <Link to="/contact">
          <button
            ref={ctnBtn}
            className="bg-[#daf700] text-black hover:bg-black hover:text-[#daf700] px-4 py-2 border rounded-full transition duration-300 paragraph"
          >
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Publisher;
