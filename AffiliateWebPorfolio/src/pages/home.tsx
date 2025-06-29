import type React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Hero from "../compontants/hero";

gsap.registerPlugin(useGSAP);

const Home: React.FC = () => {
  useGSAP(() => {
    gsap.to(".box", { rotation: "+=360", duration: 3 });
  }, []);
  return <div>Home</div>;
};

export default Home;
