import type React from "react";
import { Link } from "react-router-dom";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
 
  return (
    <footer className="w-full bg-black text-white px-10 py-18 flex flex-row items-center justify-center">
      <div className="flex flex-col items-center max-w-[2000px] ">
        <div className="">
          <h1 className="text-4xl text-center font-bold text-[#daf700] hero-font">
            Want to partner with us?
          </h1>
        </div>
        <div>
          <p className="text-center mt-10 paragraph">
            If you're interested in our partnership and would like to find out
            some more information, <br /> one of our advisors is excited to
            help.{" "}
          </p>
        </div>
        <div>
          <button className="mt-10 bg-[#daf700] hover:bg-yellow-200 rounded-4xl text-black px-6 py-3 transition duration-300 hover:shadow-amber-200 hover:shadow-lg paragraph">
            Get Started
          </button>
        </div>

        <hr className="border-t border-white w-7xl my-10" />

        <div className="flex flex-row gap-40">
          <div>
            <Link to="/">
              <h1 className="hero-font font-bold text-4xl">AffiliateX</h1>
            </Link>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-[#daf700] mb-3 hero-font">
              Partnerships
            </h1>
            <a href="" className="paragraph">
              Website
            </a>
            <a href="" className="paragraph">
              Social Media
            </a>
            <a href="" className="paragraph">
              Branding
            </a>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-[#daf700] mb-3 hero-font">About</h1>
            <a href="" className="paragraph">
              Our why
            </a>
            <a href="" className="paragraph">
              Our work
            </a>
            <a href="" className="paragraph">
              Career
            </a>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold text-[#daf700] mb-3 hero-font">Support</h1>
            <a href="" className="paragraph">
              Support Request
            </a>
            <a href="" className="paragraph">
              Contact
            </a>
          </div>
          <div>
            <h1 className="font-bold text-[#daf700] mb-3 hero-font">
              Follow Us
            </h1>
            <div className="flex gap-5 mt-4 text-xl">
              <div>
                <FaYoutube />
              </div>
              <div>
                <FaXTwitter />
              </div>
              <div>
                <FaLinkedin />
              </div>
              <div>
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>

        <hr className="border-t border-white w-7xl my-10" />

        <div className="w-full flex justify-between items-center p-1">
          <p className="paragraph">
            © {currentYear} AffiliateX Ltd. All rights reserved
          </p>
          <p className="paragraph">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
