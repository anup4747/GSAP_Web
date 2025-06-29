import type React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

gsap.registerPlugin(useGSAP);

const About: React.FC = () => {
  useGSAP(() => {
    gsap.to(".box", { rotation: "+=360", duration: 3 });
  }, []);
  return <div>About</div>;
};

export default About;
