import type React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import laptopImg from "../assets/laptop.jpg"

gsap.registerPlugin(useGSAP);

const Publisher: React.FC = () => {
  useGSAP(() => {
    gsap.to(".box", { rotation: "+=360", duration: 3 });
  }, []);
  return (
     <section>
      <div className="flex px-20 py-15 items-center">
        <div className="w-1/2">
          <h1 className="leading-tight hero-font text-6xl ">
            Publishers and <br /> AffiliateX

          </h1>
        </div>
        <div>
          <h1 className="mb-2 info-heading text-lg">Maximizing your earning potential</h1>
          <p className="mb-2 w-96 paragraph">
            We provide publishers the resources and support necessary to optimize and monetize their content effectively.
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
          <h1 className="leading-tight hero-font text-6xl ">
           Publisher Services
          </h1>
        </div>
        <div className="flex mt-20 mb-26">
          <div className="w-1/2">
            <h1 className="mb-2 info-heading text-lg">Profit Optimization</h1>
          </div>
          <div>
            <p className="mb-2 w-96 paragraph">
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
        </div>
        <hr className="border-b border w-full" />
        <div className="flex mt-10 mb-26">
          <div className="w-1/2">
            <h1 className="mb-2 info-heading text-lg">
              Content Monetization
            </h1>
          </div>
          <div>
            <p className="mb-2 w-96 paragraph">
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
        </div>
        <hr className="border-b border w-full" />
        <div className="flex mt-10 mb-26">
          <div className="w-1/2">
            <h1 className="mb-2 info-heading text-lg">
              Audience Engagement
            </h1>
          </div>
          <div>
            <p className="mb-2 w-96 paragraph">
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
        </div>
        <hr className="border-b border w-full" />
        <div className="flex mt-10 mb-26">
          <div className="w-1/2">
            <h1 className="mb-2 info-heading text-lg">
              Fraud detection and Prevention
            </h1>
          </div>
          <div>
            <p className="mb-2 w-96 paragraph">
              I'm a paragraph. Click here to add your own text and edit me. I’m
              a great place for you to tell a story and let your users know a
              little more about you.
            </p>
          </div>
        </div>
      <Link to="/contact">
        <button className="bg-[#daf700] text-black hover:bg-black hover:text-[#daf700] px-4 py-2 border rounded-full transition duration-300 paragraph">Contact Us</button>
      </Link>
      </div>

    
    </section>
  );
};

export default Publisher;
