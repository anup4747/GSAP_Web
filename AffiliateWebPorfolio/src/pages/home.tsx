import type React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Hero from "../compontants/hero";
import officeImg from "../assets/office1.jpg";
import officeImg2 from "../assets/office2.jpg";
// import officeImg3 from "../assets/office3.jpg"
import googleImg from "../assets/google.png";
import amazonImg from "../assets/amazon.png";
import microsoftImg from "../assets/microsoft.png";
import spotifyImg from "../assets/spotify.png";
import zaraImg from "../assets/zara.png";
import levisImg from "../assets/levis.png";
import laptopImg from "../assets/laptop.jpg";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(useGSAP);

const Home: React.FC = () => {
  // image1
  const imgRef = useRef<HTMLImageElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  //section 1
  const headingspan1 = useRef<HTMLSpanElement | null>(null);
  const headingspan2 = useRef<HTMLSpanElement | null>(null);
  const leftheading1 = useRef<HTMLHeadingElement | null>(null);
  const leftparagraph1 = useRef<HTMLParagraphElement | null>(null);
  const leftheading2 = useRef<HTMLHeadingElement | null>(null);
  const leftparagraph2 = useRef<HTMLParagraphElement | null>(null);
  const leftheading3 = useRef<HTMLHeadingElement | null>(null);
  const leftparagraph3 = useRef<HTMLParagraphElement | null>(null);

  // section 2
  const headingspan12 = useRef<HTMLSpanElement | null>(null);
  const headingspan22 = useRef<HTMLSpanElement | null>(null);
  const Solnbannerhead1 = useRef<HTMLHeadingElement | null>(null);
  const Solnbannerpara1 = useRef<HTMLParagraphElement | null>(null);
  const Solnbannerbtn1 = useRef<HTMLButtonElement | null>(null);
  const Solnbannerhead2 = useRef<HTMLHeadingElement | null>(null);
  const Solnbannerapara2 = useRef<HTMLParagraphElement | null>(null);
  const Solnbannerbtn2 = useRef<HTMLButtonElement | null>(null);

  // img2
  const img2Ref = useRef<HTMLImageElement | null>(null);
  const wrapper2Ref = useRef<HTMLDivElement | null>(null);

  //section3
  const headingspan13 = useRef<HTMLSpanElement | null>(null);
  const headingspan23 = useRef<HTMLSpanElement | null>(null);
  const PartnershipsPara = useRef<HTMLParagraphElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  // section4
  const heading14 = useRef<HTMLHeadingElement |null>(null);
  const testimony1 = useRef<HTMLDivElement | null>(null);
  const testimony2 = useRef<HTMLDivElement | null>(null);
  const testimony3 = useRef<HTMLDivElement | null>(null);

  //img3
  const img3Ref = useRef<HTMLImageElement | null>(null);
  const wrapper3Ref = useRef<HTMLDivElement | null>(null);

  // contact section
  const heading15 = useRef<HTMLHeadingElement | null>(null);
  const contactinfo = useRef<HTMLParagraphElement | null>(null);

  useGSAP(() => {
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

    // section1
    gsap.fromTo(
      headingspan1.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headingspan1.current,
          start: "top 75%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      headingspan2.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: headingspan2.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      leftheading1.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.05,
        scrollTrigger: {
          trigger: leftheading1.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      leftparagraph1.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.1,
        scrollTrigger: {
          trigger: leftparagraph2.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      leftheading2.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: leftheading2.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      leftparagraph2.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: leftparagraph2.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      leftheading3.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: leftparagraph2.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      leftparagraph3.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: leftparagraph2.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    // section2
    gsap.fromTo(
      headingspan12.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.05,
        scrollTrigger: {
          trigger: headingspan12.current,
          start: "top 78%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      headingspan22.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: headingspan22.current,
          start: "top 78%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      Solnbannerhead1.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: Solnbannerhead1.current,
          start: "top 78%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      Solnbannerpara1.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.1,
        scrollTrigger: {
          trigger: Solnbannerpara1.current,
          start: "top 78%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      Solnbannerbtn1.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.1,
        scrollTrigger: {
          trigger: Solnbannerbtn1.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      Solnbannerhead2.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: Solnbannerhead2.current,
          start: "top 78%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      Solnbannerapara2.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.1,
        scrollTrigger: {
          trigger: Solnbannerapara2.current,
          start: "top 78%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      Solnbannerbtn2.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.1,
        scrollTrigger: {
          trigger: Solnbannerbtn1.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

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

    // section3
    const images = gsap.utils.toArray(".grid img");
    gsap.fromTo(
      headingspan13.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.05,
        scrollTrigger: {
          trigger: headingspan13.current,
          start: "top 78%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      headingspan23.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: headingspan23.current,
          start: "top 78%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      PartnershipsPara.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: PartnershipsPara.current,
          start: "top 78%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      images,
      { opacity: 0, y: 50 }, // Initial state
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridRef.current, 
          start: "top 80%", 
          toggleActions: "play none none none", 
          once: true, 
        },
      }
    );

    // section4
    gsap.fromTo(
      heading14.current,
      { opacity: 0, y: 70 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.05,
        scrollTrigger: {
          trigger: heading14.current,
          start: "top 78%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      testimony1.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: testimony1.current,
          start: "top 78%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      testimony2.current,
      { opacity: 0, x: 1070 },
      {
        opacity: 1,
        x: 720,
        duration: 1,
        scrollTrigger: {
          trigger: testimony2.current,
          start: "top 78%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      testimony3.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: testimony3.current,
          start: "top 78%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );

    if (img3Ref.current && wrapper3Ref.current) {
      gsap.fromTo(
        img3Ref.current,
        { scale: 1.3 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper3Ref.current,
            start: "top 80%", // Start when the top of the image hits 80% of the viewport
            end: "bottom 20%", // End when the bottom of the image hits 20% of the viewport
            scrub: true, // Smoothly animate with scroll
            markers: false, // Set to true for debugging
          },
        }
      );
    }

     gsap.fromTo(
      heading15.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.05,
        scrollTrigger: {
          trigger: heading15.current,
          start: "top 78%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      contactinfo.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contactinfo.current,
          start: "top 78%",
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
      <Hero />

      <div className="w-full flex justify-center">
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
        <div className="bg-[#d9f505] w-1/2 px-24 py-20">
          <h1 className="leading-tight hero-font text-7xl ">
            <span ref={headingspan1}>Why Choose</span>
            <span ref={headingspan2}>
              <br /> Vellisy?
            </span>
          </h1>
        </div>
        <div className="w-1/2 py-24 px-32 flex flex-col justify-center ">
          <div className="mb-11">
            <h3 ref={leftheading1} className="mb-2 info-heading text-lg">
              85% success rate among clients
            </h3>
            <p ref={leftparagraph1} className="mb-2 w-96 paragraph">
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
          <div className="mb-12">
            <h3 ref={leftheading2} className="mb-2 info-heading text-lg">
              Seamless integration with different platforms
            </h3>
            <p ref={leftparagraph2} className="mb-2  w-96 paragraph">
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
          <div>
            <h3 ref={leftheading3} className="mb-2 info-heading text-lg">
              Dedicated account managers
            </h3>
            <p ref={leftparagraph3} className="mb-2 w-96 paragraph">
              {" "}
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#e6e6e6] px-24 py-24">
        <div className="w-full hero-font text-6xl mb-14">
          <h1>
            <span ref={headingspan12}>Maximize Your</span>
            <br />
            <span ref={headingspan22}>Earnings Potential</span>
          </h1>
        </div>
        <div className="flex gap-x-96">
          <div>
            <h3 ref={Solnbannerhead1} className="mb-2 info-heading text-lg">
              Solutions for Publishers
            </h3>
            <p ref={Solnbannerpara1} className="mb-2 w-96 paragraph">
              {" "}
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
            <button
              ref={Solnbannerbtn1}
              className="paragraph pr-4 pt-2 pb-2 pl-4 mt-2 border bg-[#d9f505] hover:bg-black hover:text-yellow-200 hover:cursor-pointer border-black rounded-4xl transition duration-300 "
            >
              {" "}
              Learn More
            </button>
          </div>
          <div className="ml-24">
            <h3 ref={Solnbannerhead2} className="mb-2 info-heading text-lg">
              Solutions for Advertisers
            </h3>
            <p ref={Solnbannerapara2} className="mb-2 w-96 paragraph">
              {" "}
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
            <button
              ref={Solnbannerbtn2}
              className="paragraph pr-4 pt-2 pb-2 pl-4 mt-2 border bg-[#d9f505] hover:bg-black hover:text-yellow-200 hover:cursor-pointer border-black rounded-4xl transition duration-300 "
            >
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

      <div className="bg-[#f3ffa8] flex w-full px-24 py-20">
        <div className="hero-font text-7xl mb-14 w-1/2">
          <h1 className="">
            <span ref={headingspan13}>Partnerships</span>
            <br />
            <span ref={headingspan23}>that matter</span>
          </h1>
        </div>

        <div className="w-1/2">
          <div className="pl-32">
            <p ref={PartnershipsPara} className="mt-40 paragraph text-lg">
              This is your Client section introductory paragraph. It’s a great
              space to talk about the companies you represent or collaborate
              with on specific projects. Add your clients’ logos below to create
              a quick and effective visual representation of your relationships.
            </p>
            <br />

            <div className="mt-10">
              <div ref={gridRef} className="grid grid-cols-3 grid-rows-2 gap-4">
                <div className="flex justify-center items-center">
                  <img
                    className="h-11 my-2 w-auto"
                    src={amazonImg}
                    alt="Amazon"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="h-11 my-2 w-auto object-contain"
                    src={googleImg}
                    alt="Google"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="h-11 my-2 w-auto object-contain"
                    src={microsoftImg}
                    alt="Microsoft"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="h-11 my-2 w-auto object-contain"
                    src={spotifyImg}
                    alt="Spotify"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="h-11 my-2 w-auto object-contain"
                    src={zaraImg}
                    alt="Zara"
                  />
                </div>
                <div className="flex justify-center items-center">
                  <img
                    className="h-11 my-2 w-auto object-contain"
                    src={levisImg}
                    alt="Levi's"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-24 py-20">
        <div className="mb-14 w-1/2">
          <h1 ref={heading14} className="hero-font text-7xl">Success Stories</h1>
        </div>

        <div className="w-full max-w-[1200px] mt-12">
          <div ref={testimony1} className="bg-[#e6e6e6] rounded-4xl p-6 flex flex-row gap-8 w-5xl pl-16 pr-26 py-10 mb-12 text-black">
            <div className="">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
                alt={`Jessica's logo`}
                className="w-26 h-26 mr-30 rounded-full"
              />
            </div>
            <div>
              <p className="text-2xl leading-relaxed paragraph mb-4">
                "This platform has completely transformed my affiliate marketing
                journey. Within just two months, I saw my monthly earnings
                triple! The step-by-step guides and support team are phenomenal.
                I’ve finally achieved financial freedom thanks to this program."
              </p>

              <h3 className="text-xl name font-bold">- Jessica R.</h3>
            </div>
          </div>

          <div ref={testimony2} className="bg-[#f3ffa8] rounded-4xl p-6 flex flex-row gap-8 w-5xl pl-16 pr-26 py-10 mb-12 text-black">
            <div className="">
              <img
                src="https://images.pexels.com/photos/5080358/pexels-photo-5080358.jpeg"
                alt={`Michael's logo`}
                className="w-26 h-26 mr-30 rounded-full"
              />
            </div>
            <div>
              <p className="text-2xl leading-relaxed paragraph mb-4">
                "I was skeptical at first, but after joining, I realized how
                powerful the tools and training are. The affiliate products
                practically sell themselves! Now I earn a passive income stream
                while focusing on other priorities in life. Highly recommend
                it!"
              </p>

              <h3 className="text-xl name font-bold">- Michael T.</h3>
            </div>
          </div>

          <div ref={testimony3} className="bg-[#daf700] rounded-4xl p-6 flex flex-row gap-8 w-5xl pl-16 pr-26 py-10 mb-12 text-black">
            <div className="">
              <img
                src="https://images.pexels.com/photos/12661826/pexels-photo-12661826.jpeg"
                alt={`Samantha's logo`}
                className="w-26 h-26 mr-30 rounded-full"
              />
            </div>
            <div>
              <p className="text-2xl leading-relaxed paragraph mb-4">
                "The dashboard is user-friendly, and the resources provided are
                worth every penny. I went from struggling to make my first sale
                to earning over $5,000 a month in commissions. Best decision
                I’ve made this year!"
              </p>

              <h3 className="text-xl name font-bold">- Samantha P.</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div
          ref={wrapper3Ref}
          className="w-full max-w-[2000px] h-[600px] overflow-hidden"
        >
          <img
            ref={img3Ref}
            src={laptopImg}
            alt="Office"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="px-24 py-20 flex flex-col items-center">
        <div className="">
          <h1 ref={heading15} className="hero-font text-6xl text-center mb-8">
            Stay Connected
          </h1>
          <p ref={contactinfo} className="text-md text-center paragraph mb-12">
            This is your Contact section paragraph. Encourage your <br /> reader
            to reach out with any questions, comments or to <br /> take a
            different action specific to your site.
          </p>
        </div>

        <div className="w-full max-w-4xl">
          <form action="#" className="bg-white rounded-lg">
            <div className="flex gap-6 mb-6">
              <div className="flex-1">
                <label
                  htmlFor="first-name"
                  className="block font-medium text-gray-700 text-xl hero-font mb-4"
                >
                  First name*
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="last-name"
                  className="block font-medium text-gray-700 text-xl hero-font mb-4"
                >
                  Last name*
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block font-medium text-gray-700 text-xl hero-font mb-4"
                >
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1">
                <label
                  htmlFor="message"
                  className="block font-medium text-gray-700 text-xl hero-font mb-4"
                >
                  Message*
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>
            <div className="mt-6 text-center">
              <button
                type="submit"
                className="cursor-pointer px-8 py-3 bg-[#daf700] w-full border paragraph font-medium text-black rounded-3xl hover:bg-black hover:text-[#daf700] transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Home;
