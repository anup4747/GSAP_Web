import type React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const Contact: React.FC = () => {
  const heading = useRef<HTMLHeadingElement | null >(null);
  const info = useRef<HTMLParagraphElement | null >(null);
  useGSAP(() => {
     gsap.fromTo(
      heading.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          trigger: heading.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
    gsap.fromTo(
      info.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.05,
        scrollTrigger: {
          trigger: info.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      }
    );
  }, []);
  return (
    <section>
      <div className="flex px-30 py-24 ">
        <div className="w-1/2">
          <h1 ref={heading} className="leading-tight hero-font text-6xl ">Get in Touch</h1>

          <p ref={info} className="mt-4 paragraph text-lg w-lg">
            We're excited to hear from you. Drop us a message and we'll get back
            to you as soon as possible
          </p>
        </div>

        <div className="w-full max-w-4xl mt-50">
          <form action="#" className="bg-white p-6 rounded-lg">
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

export default Contact;
