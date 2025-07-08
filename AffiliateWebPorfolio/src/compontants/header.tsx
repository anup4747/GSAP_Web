import type React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RiCloseLargeFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { useState } from "react"
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex items-center justify-between p-4 text-black border-b-2 border-blue-200">
      <div className="text-3xl font-bold ml-10 cursor-pointer">
        <Link to="/">AffiliateX</Link>
      </div>

      <div
        onClick={toggleMenu}
        className="hover:cursor-pointer hover:bg-[#d9f505] flex justify-center items-center border pr-6 pl-6 pt-2.5 pb-2.5 rounded-full mr-10 transition duration-300"
      >
        <div className="text-xl paragraph">Menu</div>
        
      </div>

      {isMenuOpen && (
        <nav
          ref={menuRef}
          style={{ backgroundColor: "#1a1a1a" }}
          className={`absolute top-0 left-0 right-0 bg-none md:bg-transparent w-full md:p-0 z-10`}
        >
          <ul className="gap-10 flex flex-col items-center justify-center text-white mb-16">
            <li className="mt-16" onClick={toggleMenu}>
              <RiCloseLargeFill className="text-4xl" />
            </li>
            <br />
            <br />
            <li className="text-6xl">
              <NavLink to="/" onClick={toggleMenu}> Home </NavLink>{" "}
            </li>
            <li className="text-6xl">
              <NavLink to="/about" onClick={toggleMenu}> About </NavLink>{" "}
            </li>
            <li className="text-6xl">
              <NavLink to="/publisher" onClick={toggleMenu}> Publisher </NavLink>{" "}
            </li>
            <li className="text-6xl">
              <NavLink to="/advertiser" onClick={toggleMenu}> Advertiser </NavLink>{" "}
            </li>
            <li className="text-6xl">
              <NavLink to="/contact" onClick={toggleMenu}> Contact </NavLink>{" "}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
