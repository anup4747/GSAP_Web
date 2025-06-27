import { motion } from "framer-motion";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

export default function Header() {
  const navElement1 = useRef<HTMLAnchorElement | null>(null);
  const navElement2 = useRef<HTMLAnchorElement | null>(null);
  const navElement3 = useRef<HTMLAnchorElement | null>(null);
  const navElement4 = useRef<HTMLAnchorElement | null>(null);
  const navElement5 = useRef<HTMLAnchorElement | null>(null);
  useGSAP(() => {
    gsap.fromTo(
      [
        navElement1.current,
        navElement2.current,
        navElement3.current,
        navElement4.current,
        navElement5.current,
      ],
      { opacity: 0, y: -20 },
      {cursor:"none" , opacity: 1, y: 0, duration: 1, stagger: 0.2, delay:0.7, ease: "power2.out" }
    );
  }, []);
  return (
    <motion.nav
      className="fixed top-0 w-full p-6 backdrop-blur-xl bg-gray-900/80 border-b border-white/10 z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl select-none mx-auto flex justify-between items-center">
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent"
          whileHover={{ scale: 1.05 }}
        >
          NeuraBots
        </motion.div>
        <div className="hidden md:flex space-x-8">
          <a
            href="#"
            ref={navElement1}
            className="hover:cursor-none opacity-0 text-white hover:text-cyan-400 transition-colors duration-300 "
          >
            {" "}
            Home{" "}
          </a>
          <a
            href="#"
            ref={navElement2}
            className="hover:cursor-none opacity-0 text-white hover:text-cyan-400 transition-colors duration-300"
          >
            {" "}
            Products{" "}
          </a>
          <a
            href="#"
            ref={navElement3}
            className="hover:cursor-none opacity-0 text-white hover:text-cyan-400 transition-colors duration-300"
          >
            {" "}
            Technology{" "}
          </a>
          <a
            href="#"
            ref={navElement4}
            className="hover:cursor-none opacity-0 text-white hover:text-cyan-400 transition-colors duration-300"
          >
            {" "}
            About{" "}
          </a>
          <a
            href="#"
            ref={navElement5}
            className="hover:cursor-none opacity-0 text-white hover:text-cyan-400 transition-colors duration-300"
          >
            {" "}
            Contact{" "}
          </a>

          <motion.div
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.nav>
  );
}
