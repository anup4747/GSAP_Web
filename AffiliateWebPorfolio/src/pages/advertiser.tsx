import type React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import laptopImg from "../assets/laptop.jpg";
import { Link } from "react-router-dom";
gsap.registerPlugin(useGSAP);

const Advertiser: React.FC = () => {
  useGSAP(() => {
    gsap.to(".box", { rotation: "+=360", duration: 3 });
  }, []);
  return (
    <section>
      <div className="flex px-20 py-15 items-center">
        <div className="w-1/2">
          <h1 className="leading-tight hero-font text-6xl ">
            Solutions for <br /> Advertisers
          </h1>
        </div>
        <div>
          <h1 className="mb-2 info-heading text-lg">Amplify your reach</h1>
          <p className="mb-2 w-96 paragraph">
            AffiliateX offers advertisers customized strategies to maximize
            their marketing efforts and drive tangible results.
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
            Advertiser Services <br /> Overview
          </h1>
        </div>
        <div className="flex mt-20 mb-26">
          <div className="w-1/2">
            <h1 className="mb-2 info-heading text-lg">Campaign Management</h1>
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
            <h1 className="mb-2 info-heading text-lg">Strategic Planning</h1>
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
          <button className="bg-[#daf700] text-black hover:bg-black hover:text-[#daf700] px-4 py-2 border rounded-full transition duration-300 paragraph">
            {" "}
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Advertiser;
